export default async (context, locale) => {
  return await Promise.resolve({
    hello: 'Welcoma',
    pageNotFound: 'página no encontrada',
    homePage: 'página de inicio',
    homePageTitle: 'Compra y vende camisetas de fútbol auténticas',
    otherError: 'Ocurrió un error'
  })
}