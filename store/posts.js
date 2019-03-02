export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
}
export const actions = {
    nuxtServerInit({ commit }, context) {
        return new Promise((resolve, reject) => {
            commit('setPosts',[
                {
                    id: '1',
                    isAdmin: true,
                    title: 'Title 1',
                    content: 'Some content',
                    thumbnail: "~assets/computer-screen.png"
                },
                {
                    id: '2',
                    isAdmin: true,
                    title: 'Title 1',
                    content: 'Some content',
                    thumbnail: "~assets/computer-screen.png"
                }
            ])
            resolve()
        })
    },
    setPosts({ commit }, posts) {
        commit('setPosts', posts)
    }
}
export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
}

