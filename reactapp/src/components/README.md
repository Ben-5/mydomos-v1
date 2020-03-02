# Components
##### Un petit fichier pour explique comment nos "components" fonctionne pour s'y retrouver (une espece de doc).


## Input (Cosmo)
* Import
```
import Input from '../components/Input';
```

* Exemple d'utilisation :
```
<Input placeholder='hello' onChange={e=>console.log(e)} />
```

* Props :

|Props Name|Description|Obligatoire|type de valeur|Example d'utilisation|Par Default|
|----|----|----|----|----|----|
|onChange|Une props qui "return" la valeur de l'input à chaque changement|Oui|function|`onChange={(value)=>console.log(value)}`|none|
|type|Défini le type de l'input|Non|String (https://bit.ly/2uJR8rG) |`type='password'`|`'text'`|
|value|Défini la valeur de l'input|Non|String|`value='Votre email'`|`''`|
|placeholder|Défini le placeholder|Non|String|`placeholder='try paris'`|`'PLACE HOLDER PROPS MISSING'`|
