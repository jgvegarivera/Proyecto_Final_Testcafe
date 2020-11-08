import page from './PageObjectModel';
import { data } from './data';
import { errores} from './constantes';
//Página y modulo a probar
fixture('Pruebas de modulo mi cuenta')
    .page('http://automationpractice.com/');
//Tests
test('Crear cuenta sin correo', async t =>{
    await t 
        .click(page.signIn_link)
    await t
        .expect(page.createAccount_btn.visible).ok()
        .click(page.createAccount_btn)
    await t
        .expect(page.email_error_cuenta.innerText).contains(errores.email_invalido)
});
test('Crear cuenta con formato diferente a correo', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_input.visible).ok()
        .typeText(page.email_input, '2456453215')
        .expect(page.createAccount_btn.visible).ok()
        .click(page.createAccount_btn)
    await t
        .expect(page.email_error_cuenta.innerText).contains(errores.email_invalido)
});
test('Crear cuenta con correo previamente registrado', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_input.visible).ok()
        .typeText(page.email_input, 'admin@admin.com')
        .expect(page.createAccount_btn.visible).ok()
        .click(page.createAccount_btn)
    await t
        .expect(page.email_error_cuenta.innerText).contains(errores.email_existente)
});
test('Entrar a crear cuenta con un correo valido', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
    await t
        .expect(page.email_form.value).contains(data.email)
});
test('Ingresar a una cuenta sin datos', async t => {
    await t
        .click(page.signIn_link)
    await t
        .expect(page.signIn_btn.visible).ok()
        .click(page.signIn_btn)
    await t
        .expect(page.signIn_error_email.innerText).contains(errores.email_requerido)
});
test('Ingresar a una cuenta con correo existente y contraseña vacia', async t => {
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .typeText(page.email_form, 'jvega@vivaorganica.com.mx')
        .click(page.signIn_btn)
    await t
        .expect(page.signIn_error_email.innerText).contains(errores.password_requerido)
});
test('Ingresar a una cuenta con correo existente y contraseña erronea', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .typeText(page.email_form, 'jvega@vivaorganica.com.mx')
        .expect(page.password_input.visible).ok()
        .typeText(page.password_input, '123456')
        .click(page.signIn_btn)
    await t
        .expect(page.signIn_error_email.innerText).contains(errores.autentificacion_fallida)
});
test('Olvide contraseña sin correo', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.password_input.visible).ok()
        .click(page.forgotPassword_btn)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.retrievePassword_btn.visible).ok()
});
test('Olvide contraseña con texto sin formato email', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.password_input.visible).ok()
        .click(page.forgotPassword_btn)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.retrievePassword_btn.visible).ok()
        .typeText(page.email_form, '123456789')
        .click(page.retrievePassword_btn)
    await t
        .expect(page.retrive_error_email.innerText).contains(errores.email_forgot_password)
});
test('Olvide contraseña con un correo no existente en la BD', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.password_input.visible).ok()
        .click(page.forgotPassword_btn)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.retrievePassword_btn.visible).ok()
        .typeText(page.email_form, 'asdqwezxc123@123asdasdas.com')
        .click(page.retrievePassword_btn)
    await t
        .expect(page.retrive_error_email.innerText).contains(errores.email_noAccount_registred)
});
test('Olvide contraseña con un correo valido', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.password_input.visible).ok()
        .click(page.forgotPassword_btn)
    await t
        .expect(page.email_form.visible).ok()
        .expect(page.retrievePassword_btn.visible).ok()
        .typeText(page.email_form, 'jvega@vivaorganica.com.mx')
        .click(page.retrievePassword_btn)
    await t
        .expect(page.forgotPassword_confirmation.innerText).contains(errores.email_forgort_correcto)
});
test('Validar campos obligatorios del formulario', async t =>{
    await t
        .click(page.signIn_link)
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
    await t
        .expect(page.email_form.value).contains(data.email)
        .click(page.register_btn)
    await t
        .expect(page.create_error.innerText).contains(errores.createAccount_error)
});
test('Crear una cuenta', async t =>{
    await t
        .click(page.signIn_link)
        console.log("Correo: ", data.email)
        console.log("firstName: ", data.firstName)
        console.log("lastName: ", data.lastName)
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
    await t
        .expect(page.email_form.value).contains(data.email)
        .typeText(page.firstName_input, data.firstName)
        .expect(page.firstName_input.value).contains(data.firstName)
        .typeText(page.lastName_input, data.lastName)
        .expect(page.lastName_input.value).contains(data.lastName)
        .typeText(page.password_input, data.password)
        .expect(page.password_input.value).contains(data.password)
        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)
        .typeText(page.adress, data.pbox)
        .expect(page.adress.value).contains(data.pbox)
        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)
        .click(page.state)
        .click(page.opnState)
        .typeText(page.zip, data.zip)
        .expect(page.zip.value).contains(data.zip)
        .click(page.country)
        .click(page.opnCountry)
        .expect(page.adressAlias.value).contains(data.adress_Alias)
        .click(page.register_btn)
    await t
        .expect(page.signOut_link.visible).ok()
});