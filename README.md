![](https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif)
# TestCafe Proyecto Final
Este proyecto es el examen final para poder obtener el certificado del curso impartido por QA Minds Labs.

# Introducción
> En este repositorio encontraras pruebas a modulos y una prueba end-to-end hechas a una pagina e-commerce de prueba. Para poder hacer uso de ellos necesitaras de alguna herramientas previas para poder ejecutarlas.

# Requerimientos
* [<a href="https://nodejs.org/en/download/" rel="nofollow">NodeJS</a>] - es un tiempo de ejecución de JavaScript basado en el motor JavaScript V8 de Chrome.
* [<a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a>] - editor de codigo. Refinamiento. Gratis. Codigo abierto. Corre donde sea.
* [<a href="https://devexpress.github.io/testcafe/" rel="nofollow">Testcafe</a>] - Una herramienta de NodeJS para automatizar el testing.
* [<a href="https://git-scm.com/downloads" rel="nofollow">Git</a>] - es un sistema de control de versiones distribuido, gratuito y de código abierto, diseñado para manejar todo, desde proyectos pequeños hasta proyectos muy grandes con velocidad y eficiencia.
* [<a href="https://www.google.com/chrome/" rel="nofollow">Chrome</a>] - Puedes usar el navegador de tu conveniencia pero recomendamos este.

# Instalación de programas

> **Descarga e instalación** de <a href="https://nodejs.org/en/download/" rel="nofollow">NodeJS</a> <p>
Para **Windows** entra al link y descarga la versión "recomendada por más usuarios".<p>
Para **Mac OS** debes contar con <a href="https://osxdaily.com/2018/03/07/how-install-homebrew-mac-os/">Homebrew</a> para poder ejecutar los siguientes comandos
```sh
$ brew update
$ brew install node
```
Para **Ubuntu** ejecutamos las siguientes instrucciones:
````sh
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
````
>**Descarga e instalación** de <a href="https://git-scm.com/downloads" rel="nofollow" _istranslated="1">Git</a> 
Para **windows**, **Mac OS** o **Ubuntu** entra al link y descarga la versión adecuada para tu sistema operativo (Recomiendo no mover nada durante la instalación, solo darle siguiente).

> **Descarga e instalación** de <a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a> 
Para **windows**, **Mac OS** o **Ubuntu** entra al link y descarga la versión correcta para tu Sistema Operativo.
    
# Integrando Git a VisualStudio Code
Si te gusta trabajar directamente de VisualStudio code sin abrir una terminal aparte de Bash, vamos a integrarlo.
Para ellos seguiremos los siguientes pasos.
- En VisualStudio code presionamos el siguiente comando<p> `ctrl+,`<p>
- En el buscador escribiremos <p>`shell`<p> y buscaremos lo siguiente
```sh 
Terminal › Integrated › Shell: Windows
The path of the shell that the terminal uses on Windows (default: C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe).
```
- Si dejamos el mouse sobre el texto aparecere un engrane al lado izquierdo, vamos a dar clic en el y seleccionamos<p> `Copy Setting as a JSON`<p>
- Ahora damos clic en <p>`Edit in setting.json`<p>
- Dentro de setting.json pegamos el texto copiado y cambiamos la ruta por la de nuestro GIT, en mi caso quedo así:
````sh
{
    terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
}
````
- Listo solo queda guardar nuestros cambios y reiniciar VisualStudio Code.

# Instalando TestCafe
Aquí nos encontramos con algo tan fácil como un comando el cual nos ayuda a descargarlo de su repositorio.<p>
`npm install -g testcafe`<p>
Una vez instalado comprobamos que existe con el siguiente comando:<p>
`testcafe -v`
 Esto nos arrojara la versión de testcafe que tenemos instalada.
  
# Felicidades!!

**Ahora que ya tienes testcafe puedes comenzar a interactuar con el contenido de este repositorio.**<p>
![](https://media.giphy.com/media/xT1XGzXhVgWRLN1Cco/giphy.gif)
