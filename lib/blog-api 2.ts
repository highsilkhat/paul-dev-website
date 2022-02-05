import path from 'path'
import fs from 'fs/promises'
import { micromark } from 'micromark'
import matter from 'gray-matter'
import { stringifyError } from './utils'

export interface MetaData {
  title: string
  publishedDate: string
  excerpt: string
}

export interface PostListDetails extends MetaData {
  slug: string
}

export interface PostContent {
  htmlContent: string
  metaData: MetaData
}

const fileExtension = '.md'

const postsDirectory = path.join(process.cwd(), '_posts')

function parseMetaData(rawMetaData: Record<string, unknown>): MetaData {
  const title = rawMetaData.title
  if (!title || typeof title !== 'string') {
    throw new Error('Missing title, just like Dickinson')
  }

  const publishedDate = rawMetaData.publishedDate
  if (!publishedDate || typeof publishedDate !== 'string') {
    throw new Error('Missing date')
  }

  const excerpt = rawMetaData.excerpt
  if (!excerpt || typeof excerpt !== 'string') {
    throw new Error("No excerpt, tell me what we're getting into here.")
  }

  return { title, publishedDate, excerpt }
}

async function getMatterData(
  slug: string
): Promise<matter.GrayMatterFile<string>> {
  const content = await fs.readFile(
    path.join(postsDirectory, `${slug}${fileExtension}`)
  )

  const markDown = content.toString('utf8')

  try {
    return matter(markDown)
  } catch (error) {
    throw new Error(
      `Failed to parse front matter ${slug}: ${stringifyError(error)}`
    )
  }
}

export async function getAllPosts(): Promise<PostListDetails[]> {
  const files = await fs.readdir(postsDirectory)

  const slugs = files
    .filter((file) => path.extname(file) === fileExtension)
    .map((file) => file.slice(0, -fileExtension.length))

  const details: PostListDetails[] = []

  for (const slug of slugs) {
    const matterData = await getMatterData(slug)

    try {
      const metaData = parseMetaData(matterData.data)
      details.push({ ...metaData, slug })
    } catch (error) {
      throw new Error(
        `Failed to get post content for ${slug}: ${stringifyError(error)}`
      )
    }
  }
  return details
}

export async function getPostContent(slug: string): Promise<PostContent> {
  const matterData = await getMatterData(slug)

  let metaData: MetaData

  try {
    metaData = parseMetaData(matterData.data)
  } catch (error) {
    throw new Error(
      `Failed to get post content for ${slug}: ${stringifyError(error)}`
    )
  }
  let htmlContent: string

  try {
    htmlContent = micromark(matterData.content)
  } catch (error) {
    throw new Error(`Micromark exception ${slug}: ${stringifyError(error)}`)
  }

  return { htmlContent: micromark(matterData.content), metaData }
}
