# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


*Anotaciones*
✱Curso_de_React:_desarrollando_con_JavaScript
■02 Campos requeridos
○<input placeholder={placeholderModificado} required={props.required}/>
○<CampoTexto titulo="Foto" placeholder="Ingresar enlace de  foto" required/>

■03 MiOrg
○padding-bottom: 24px;
○border-bottom: 4px solid #6278F7;
○cursor: pointer;

■04 Estado con React
○ Estado- hooks
const [valorDelEstado, funcionActualizaValorDelEstado] = useState(ValorInicial);

○ Los hooks son funciones especiales que permiten "enganchar" (hook into) las características de React, como el estado y el ciclo de vida, desde componentes funcionales.

■05 Mostrar ocultar formulario
○ Ternario --> condición ? seMuestra: noSeMuestra
 {fav ? <FaHeart color="red"/> : <CiHeart/>}

■02 Controlando los inputs
○ e.target.value

■03 Seleccionando equipo
○ <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>

✱Curso_de_React:_como_los_componentes_funcionan
■02 Componente equipo
○box-sizing: border-box;
cambia el modo de cálculo del tamaño de los elementos. Por defecto, el tamaño de un elemento (es decir, width y height) se calcula sólo a partir del contenido del elemento. Sin embargo, cuando usas box-sizing: border-box;, el tamaño de un elemento también incluye el padding y el borde.

○ display: inline-block;
No inicia una nueva línea, lo que permite que otros elementos estén en la misma línea. Respeta width y height.

■03 Creando equipos
○ obj.map((objeto)=>{return <Elemento data={obj} key={obj.propiedad}/>})

○ obj.map((objeto)=><Elemento data={obj} key={obj.propiedad}/>)

■02 Registrando colaborador
○ Se pasan los datos de un elemento al elemento padre(app.js) y de este se mandan al componente deseado.

■03 Mostrando colaboradores
○Se hacen llegar los datos desde el elemento padre a otro elemento específico
https://github.com/genesysaluralatam.png
https://github.com/LeonardoFMR.png

■04 Filtrando equipos
○colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}

■03 Enviando prop
Los colaboradores se agregan directamente en un array del useState en app.js. Luego, se envían los datos a los componentes.
Se usa una función .map y se envía na función como prop para eliminar colaboradores y se añade un evento onClick para llamar a dicha función.

■02 Input color
Se agrega función que modifica el color de los equipos.

■03 Actualizando equipos
Se vinculan todos los equipos existentes para que se  comuniquen con el componente padre "app".
Se crea la función actualizarColor.

■05 Actualizando color
Se muestra cómo utilizar useState para actualizar la información (el color) de los equipos.

■02 Creando IDs
Se muestra cómo instalar el paquete UUID, importarlo en el archivo app.js y usar la función para generar identificadores únicos.

■03 Eliminando colaboradores
Se crea un segundo formulario.
Se explica cómo enviar los valores del formulario al componente padre (app.js) a través de una función llamada "crearEquipo".
