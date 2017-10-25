import componentsConfig from './ComponentsConfig';



let components = {};



for (var i = 0; i < componentsConfig.length; i++) {

  let componentConfig = componentsConfig[i];

  // Check if component is not already loaded then load it

  if (components[componentConfig.name] === undefined) {

    // components[componentConfig.name] = require(`./${componentConfig.path}`).default;
    // require.ensure([], function(require) {
    //   try {
         
        // components[componentConfig.name] =   require("./" + componentConfig.path + ".jsx" ).default;
    //   } catch(err) {   }
    // });

    //or bundle-loader
    // let getTemplate = require(`./${componentConfig.path}.jsx`);
    // components[componentConfig.name] = getTemplate.default;
    // getTemplate((module) => {
    //   console.log("loading",componentConfig.name)
    //   components[componentConfig.name] = module.default ;
    // });
  }

}


// components['D1'] = D1;

export default components;