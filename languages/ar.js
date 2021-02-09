export default async (context, locale) => {
  return await Promise.resolve({
    hello: 'مرحبا',
    pageNotFound: 'الصفحة غير موجودة',
    homePage: 'الصفحة الرئيسية',
    homePageTitle: 'شراء وبيع قمصان كرة القدم الأصلية',
    otherError: 'حدث خطأ'
  })
}