/**
 * 用户相关请求模块
 */

import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
  // return new Promise((resolve, reject) => {
  //   if (Math.random() > 0.5) {
  //     return setTimeout(_ => {
  //       return resolve({
  //         code: 0,
  //         data: {
  //           msg: '登录成功',
  //           userId: 123
  //         }
  //       })
  //     }, 2000)
  //   } else {
  //     reject(new Error('失败'))
  //   }
  // })
}

// const apiMAp = {
//   news.Article: "/v1_0/articles/<int(min=1):article_id>",
//   news.ArticleCollection: "/v1_0/article/collections/<int(min=1):target>",
//   news.ArticleCollections: "/v1_0/article/collections",
//   news.ArticleDislike: "/v1_0/article/dislikes/<int(min=1):target>",
//   news.ArticleDislikes: "/v1_0/article/dislikes",
//   news.ArticleLiking: "/v1_0/article/likings/<int(min=1):target>",
//   news.ArticleLikings: "/v1_0/article/likings",
//   news.ArticleReports: "/v1_0/article/reports",
//   news.ArticlesV1_1: "/v1_1/articles",
//   news.Channels: "/v1_0/channels",
//   news.CommentLiking: "/v1_0/comment/likings/<int(min=1):target>",
//   news.CommentLikings: "/v1_0/comment/likings",
//   news.Comments: "/v1_0/comments",
//   news.CurrentUserArticles: "/v1_0/user/articles",
//   news.UserArticles: "/v1_0/users/<int(min=1):user_id>/articles",
//   news.UserReadingDurations: "/v1_0/reading/durations",
//   news.UserReadingHistories: "/v1_0/user/histories",
//   notice.Announcement: "/v1_0/announcements/<int(min=1):target>",
//   notice.Announcements: "/v1_0/announcements",
//   notice.IMTest: "/imtest/<string:event>",
//   search.Histories: "/v1_0/search/histories",
//   search.Search: "/v1_0/search",
//   search.Suggestion: "/v1_0/suggestion",
//   user.Authorization: "/v1_0/authorizations",
//   user.Blacklist: "/v1_0/user/blacklists/<int(min=1):target>",
//   user.Blacklists: "/v1_0/user/blacklists",
//   user.Channel: "/v1_0/user/channels/<int(min=1):target>",
//   user.Channels: "/v1_0/user/channels",
//   user.ChannelsV1_1: "/v1_1/user/channels",
//   user.CurrentUser: "/v1_0/user",
//   user.Figure: "/v1_0/user/figure",
//   user.Followers: "/v1_0/user/followers",
//   user.Following: "/v1_0/user/followings/<int(min=1):target>",
//   user.Followings: "/v1_0/user/followings",
//   user.Photo: "/v1_0/user/photo",
//   user.Profile: "/v1_0/user/profile",
//   user.SMSVerificationCode: "/v1_0/sms/codes/<mobile:mobile>",
//   user.User: "/v1_0/users/<int(min=1):target>"
//   }
