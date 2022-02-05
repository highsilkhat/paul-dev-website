import path from 'path'
import fs from 'fs/promises'
import { micromark } from 'micromark'
import matter from 'gray-matter'

export interface MetaData {
  title: string
  publishedDate: string
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

  return { title, publishedDate }
}

export async function getAllPosts(): Promise<string[]> {
  const files = await fs.readdir(postsDirectory)

  return files
    .filter((file) => path.extname(file) === fileExtension)
    .map((file) => file.slice(0, -fileExtension.length))
}

export async function getPostContent(slug: string): Promise<PostContent> {
  const content = await fs.readFile(
    path.join(postsDirectory, `${slug}${fileExtension}`)
  )

  const markDown = content.toString('utf8')

  const matterData = matter(markDown)

  const metaData = parseMetaData(matterData.data)

  return { htmlContent: micromark(matterData.content), metaData }
}
