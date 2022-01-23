import path from 'path'
import fs from 'fs/promises'

const postsDirectory = path.join(process.cwd(), '_posts')

export async function getAllPosts(): Promise<string[]> {
  const files = await fs.readdir(postsDirectory)

  return files
    .filter((file) => path.extname(file) === '.txt')
    .map((file) => file.slice(0, -4))
}

export async function getPostContent(slug: string): Promise<string> {
  const content = await fs.readFile(path.join(postsDirectory, `${slug}.txt`))

  return content.toString('utf8')
}
