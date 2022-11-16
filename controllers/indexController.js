export const home =(req,res) => {
    res.render('home',{
        title : 'Home',
        layout : 'layouts/main-layout'
    })
}

export const about =(req,res) => {
    res.render('About',{
        title : 'About',
        layout : 'layouts/main-layout'
    })
}

export default {home,about};