//l'última versió disponible de Bootstrap era la 5.3.3, i l'última versió del compilador
//  de Sass era la 1.92.1. En usar aquestes dues versions juntes, apareix una advertència 
// (warning) al terminal en relació al fet que la directiva @import de Sass ha estat 
// discontinuada (deprecated) i no estarà disponible a les properes versions. 

// Bootstrap està treballantLinks to an external site. en adaptar el seu codi per a no 
// fer servir aquesta directiva, però mentrestant, apareix aquesta advertència. 

//Tal com s'explica a la pàgina de Sass de la documentació de BootstrapLinks to an external site., 
// pots simplement ignorar aquesta advertència. Si vols pots silenciar aquesta advertència, 
// com s'explica a la pàgina de Parcel de la documentació de BootstrapLinks to an external site., 
// creant un fitxer amb nom .sassrc.js

module.exports = {
    silenceDeprecations: ['import', 'color-functions', 'global-builtin']
}