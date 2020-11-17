import page from "./pageObjectModel";
import { data } from "./data";
import { Selector } from "testcafe";

fixture("Pruebas al modulo de compras")
.page("http://automationpractice.com/index.php");
test("Validar agregar todos los productos de una categoria al carrito y pagarlos", async (t) => {
    await t
        .click(page.signIn_link)
    await t
        .typeText(page.email_form, data.email_valido)
        .expect(page.email_form.value)
        .contains(data.email_valido)
        .typeText(page.password_input, data.password)
        .expect(page.password_input.value)
        .contains(data.password)
        .click(page.signIn_btn)
    await t
        .expect(page.userName_text.innerText).eql(`${data.firstName} ${data.lastName}`)
        .expect(page.signOut_link.visible).ok()
    await t
        .expect(page.homeCategorias_link.nth(0).exists).ok()
        .click(page.homeCategorias_link.nth(0))
    await t
        .expect(page.womanTops_link.visible).ok()
        .click(page.womanTops_link)
    await t
        .expect(page.ListaProductos_grid.exists).ok()
    let numProducts = await page.ListaProductos_grid.count;
    for (let i = 0; i < numProducts; i++) {
      await t
        .hover(page.ListaProductos_grid.nth(i))
        .click(
            await 
                Selector("#center_column > ul > li:nth-child(" +(i + 1) +") > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span")
            )
        .click(page.seguirComprando_btn);
    }
    await t
        .hover(page.cart_hover)
        .expect(page.checkOut_btn.visible).ok()
        .click(page.checkOut_btn);
    await t
        .expect(page.proceedCheckout_btn.visible).ok()
        .click(page.proceedCheckout_btn);
    await t
        .expect(page.deliveryAddress.visible).ok()
        .expect(page.deliveryAddress.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.proceedCheckoutAddress_btn.visible).ok()
        .click(page.proceedCheckoutAddress_btn);
    await t
        .expect(page.TermsAgreed_check.visible).ok()
        .click(page.TermsAgreed_check)
        .expect(page.TermsAgreed_check.checked).ok()
        .expect(page.proceedCheckoutShipping_btn.visible).ok()
        .click(page.proceedCheckoutShipping_btn);
    await t
        .expect(page.payBank.visible).ok()
        .click(page.payBank);
    await t
        .expect(page.payBank_text.innerText).contains("BANK-WIRE PAYMENT.")
        .expect(page.confirmarOrden_btn.visible).ok()
        .click(page.confirmarOrden_btn);
    await t
        .expect(page.compraExitosa_msg.innerText).contains("Your order on My Store is complete.")
        .expect(page.logo_link.visible).ok()
        .click(page.logo_link);
  });
  test("Validar agregar todos los productos de una categoria al carrito, eliminar 1 y comprar los restantes", async (t) => {
    await t
        .click(page.signIn_link)
    await t
        .typeText(page.email_form, data.email_valido)
        .expect(page.email_form.value)
        .contains(data.email_valido)
        .typeText(page.password_input, data.password)
        .expect(page.password_input.value)
        .contains(data.password)
        .click(page.signIn_btn)
    await t
        .expect(page.userName_text.innerText).eql(`${data.firstName} ${data.lastName}`)
        .expect(page.signOut_link.visible).ok()
    await t
        .expect(page.homeCategorias_link.nth(0).exists).ok()
        .click(page.homeCategorias_link.nth(0))
    await t
        .expect(page.womanDresses_link.visible).ok()
        .click(page.womanDresses_link.nth(1))
    await t
        .expect(page.ListaProductos_grid.exists).ok()
    let numProducts = await page.ListaProductos_grid.count;
    for (let i = 0; i < numProducts; i++) {
      await t
        .hover(page.ListaProductos_grid.nth(i))
        .click(
            await 
                Selector("#center_column > ul > li:nth-child(" +(i + 1) +") > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span")
            )
        .click(page.seguirComprando_btn);
    }
    await t
        .hover(page.cart_hover)
        .expect(page.checkOut_btn.visible).ok()
        .click(page.checkOut_btn);
    await t
        .expect(page.borrarArticulo_btn.visible).ok()
        .click(page.borrarArticulo_btn)
    await t
        .expect(page.proceedCheckout_btn.visible).ok()
         .click(page.proceedCheckout_btn);
    await t
        .expect(page.deliveryAddress.visible).ok()
        .expect(page.deliveryAddress.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.proceedCheckoutAddress_btn.visible).ok()
        .click(page.proceedCheckoutAddress_btn);
    await t
        .expect(page.TermsAgreed_check.visible).ok()
        .click(page.TermsAgreed_check)
        .expect(page.TermsAgreed_check.checked).ok()
        .expect(page.proceedCheckoutShipping_btn.visible).ok()
        .click(page.proceedCheckoutShipping_btn);
    await t
        .expect(page.payBank.visible).ok()
        .click(page.payBank);
    await t
        .expect(page.payBank_text.innerText).contains("BANK-WIRE PAYMENT.")
        .expect(page.confirmarOrden_btn.visible).ok()
        .click(page.confirmarOrden_btn);
    await t
        .expect(page.compraExitosa_msg.innerText).contains("Your order on My Store is complete.")
        .expect(page.logo_link.visible).ok()
        .click(page.logo_link);
  });