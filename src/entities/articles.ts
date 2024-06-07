import { ImageCms } from './image'
import { UserCms } from './user-cms'

export interface Article {
  id: number
  attributes: {
    slug: string
    title: string
    subtitle: string
    first_text: string
    second_text: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    big_image: ImageCms
    section_images: ImageCms[]
    thumbnail: ImageCms
    user: UserCms
  }
}
