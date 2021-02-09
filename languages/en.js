export default async (context, locale) => {
  return await Promise.resolve({
    hello: 'Welcome',
    pageNotFound: 'page not found',
    homePage: 'home page',
    homePageTitle: 'Buy and Sell Authentic Soccer Jerseys',
    otherError: 'An error occurred'
  })
}