import page from './PageObjectModel';
import { data } from './data';
import { errores, urls } from './constantes';
import { ClientFunction, Selector } from 'testcafe';
let urlLocation;

fixture('Pruebas de modulo inicio y listado de productos')
    .page('http://automationpractice.com/');
test('Validar que el texto YourLogo te lleve al home', async t =>{
    await t 
        .click(page.logo_link)
        urlLocation = ClientFunction(() => document.location.href)
    await t
        .expect(urlLocation()).contains(urls.logo_url)
});
test('Validar que los botones del banner funcionen', async t =>{
    await t 
        .expect(page.bannerNext_btn.visible).ok()
        .expect(page.bannerBack_btn.visible).ok()
        .click(page.bannerNext_btn)
        .expect(page.bannerImage2.visible).ok()
    await t
        .click(page.bannerBack_btn)
        .expect(page.bannerImage1.visible).ok()
});
test('Validar los links de los banners', async t =>{
    await t 
        .expect(page.bannerImage1.visible).ok()
        .click(page.bannerImage1)
        urlLocation = ClientFunction(() => document.location.href)
    await t
        .expect(urlLocation()).notContains(urls.home_link)
});
test('Validar botones Popular y Best Sellers', async t =>{
    await t 
        .expect(page.homePage_tabsLink.nth(1).visible).ok()
        .click(page.homePage_tabsLink.nth(1))
        .expect(page.bestSeller_grid.visible).ok()
        .expect(page.popular_grid.visible).notOk()
    await t
        .expect(page.homePage_tabsLink.nth(0).visible).ok()
        .click(page.homePage_tabsLink.nth(0))
        .expect(page.popular_grid.visible).ok()
        .expect(page.bestSeller_grid.visible).notOk()
});
test('Validar boton Buscar vacio', async t =>{
    await t
        .expect(page.buscar_input.exists).ok()
        .click(page.buscarInput_btn)
    await t
        .expect(page.buscar_input.exists).ok()
        .expect(page.buscar_alerta.innerText).contains(errores.buscar_alerta_error)
});
test('Buscar un articulo que no exista', async t =>{
    await t
        .expect(page.buscar_input.exists).ok()
        .typeText(page.buscar_input, '123asd456')
        .click(page.buscarInput_btn)
    await t
        .expect(page.buscar_input.exists).ok()
        .expect(page.buscar_alerta.innerText).contains(errores.buscar_alerta_sinResultados)
});
test('Buscar algun articulo existente', async t =>{
    await t
        .expect(page.buscar_input.exists).ok()
        .typeText(page.buscar_input, 'dress')
        .click(page.buscarInput_btn)
    await t
        .expect(page.buscarResultado_msj.exists).ok()
        .expect(page.buscarResultado_msj.innerText).contains('"DRESS"')
});
test('Validar que funcione el boton T-shirts', async t =>{
    await t
        .expect(page.homeCategorias_link.nth(2).exists).ok()
        .click(page.homeCategorias_link.nth(2))
    await t
        .expect(page.tshirtBanner_text.exists).ok()
        .expect(page.tshirtBanner_text.innerText).contains('T-shirts')
});
test('Validar que funcione el boton Dresses', async t =>{
    await t
        .expect(page.homeCategorias_link.nth(0).exists).ok()
        .click(page.homeCategorias_link.nth(0))
    await t
        .expect(page.womanDresses_link.visible).ok()
        .click(page.womanDresses_link.nth(1))
    await t
        .expect(page.womanDresses_banner.exists).ok()
        .expect(page.womanDresses_banner.innerText).contains('Dresses')
});
test('Validar que funcione el boton Blouses en Hover', async t =>{
    await t
        .expect(page.homeCategorias_link.nth(0).exists).ok()
        .hover(page.homeCategorias_link.nth(0))
        .click(page.womanBlouses_link)
    await t
    .expect(page.womanBlouses_banner.innerText).contains('Blouses')
});