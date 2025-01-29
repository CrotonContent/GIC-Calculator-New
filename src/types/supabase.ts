export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
          author_id: string
          featured_image: string | null
          meta_title: string | null
          meta_description: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id: string
          featured_image?: string | null
          meta_title?: string | null
          meta_description?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
          author_id?: string
          featured_image?: string | null
          meta_title?: string | null
          meta_description?: string | null
        }
      }
    }
  }
}