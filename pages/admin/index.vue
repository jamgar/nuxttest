<template>
    <div class="admin-page">
        <h1>Admin Page</h1>
        <div class="new-post">
            <button @click="$router.push('admin/newPost')">Create a Post</button>
        </div>

        <div class="existing-post">
            <h1>Existing Posts</h1>
            <section class="featured-posts">
                <PostPreview v-for="post in posts"
                    :key="post.id"
                    :id=post.id
                    :isAdmin=true
                    :title=post.title
                    :contentPreview=post.content
                    :thumbnail=post.thumbnail
                />
            </section>
        </div>
    </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'

export default {
    components: {
        PostPreview
    },
    computed: {
        posts() {
           console.log('state', this.$store)
        }       
    }
}
</script>


<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.existing-posts h1 {
  text-align: center;
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>