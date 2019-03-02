<template>
    <div>
        <AdminPostForm :postId="loadedPost" />
    </div>
</template>

<script>
import AdminPostForm from "@/components/AdminPostForm"
export default {
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                title: 'Title Test',
                author: 'Guy Test',
                thumbnailLink: '~assets/computer-screen.png',
                content: 'Blog test content'
            }
        }
    }
}
</script>

<style>

</style>