const baseUrl = process.env.REACT_APP_API_BASE_URL

const routes = {
    login:          () => `${baseUrl}/login`,
    logout:         () => `${baseUrl}/logout`,
    register:       () => `${baseUrl}/register`,
    me:             () => `${baseUrl}/user`,
    get_comments:   () => `${baseUrl}/comments`,
    get_comment:    (id) => `${baseUrl}/comments/${id}`,
    store_comment:  ()   => `${baseUrl}/comments`,
    update_comment: (id) => `${baseUrl}/comments/${id}`,
    delete_comment: (id) => `${baseUrl}/comments/${id}`
};

export default routes;