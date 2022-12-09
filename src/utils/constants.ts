
const devHost = "http://5.135.194.236" ;
const devPort = "8181" ;
const devUrl= devHost+":"+devPort+"/app/v1/api/" ;
const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE"





export const categoriesUrl = devUrl+"get_categories" ;
export const sliderhomeUrl=devUrl+"get_slider_images"
export const TOKEN = 'Bearer '+jwt ;



export const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440,
};

export const layoutConstant = {
  topbarHeight: 40,
  grocerySidenavWidth: 280,
  containerWidth: 1200,
  mobileNavHeight: 64,
  headerHeight: 80,
  mobileHeaderHeight: 64,
};
