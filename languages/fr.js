export default async (context, locale) => {
  return await Promise.resolve({
    hello: 'salut',
    pageNotFound: 'Page non trouvée',
    homePage: 'page d\'accueil',
    homePageTitle: 'Acheter et Vendre des maillots de football authentiques',
    otherError: 'Une erreur s\'est produite'
  })
}