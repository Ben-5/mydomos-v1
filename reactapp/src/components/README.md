# Components
##### Un petit fichier pour explique comment nos "components" fonctionne pour s'y retrouver (une espece de doc).


## Input (Cosmo)
* Import
```
import Input from '../components/Input';
```

* Exemple d'utilisation :
```
export default function Home () {
    const [content, setContent] = useState('');
    return (
        <div>
            <Input onChange={e=>setContent(e)}/>
            
            <button onClick={()=>console.log(content)}>submit</button>
        </div>
    );
}
```

* Props :

|Props Name|Description|Obligatoire|type de valeur|Example d'utilisation|Par Default|
|----|----|----|----|----|----|
|onChange|Une props qui "return" la valeur de l'input à chaque changement|Oui|function|`onChange={(value)=>console.log(value)}`|none|
|type|Défini le type de l'input|Non|String (https://bit.ly/2uJR8rG) |`type='password'`|`'text'`|
|value|Défini la valeur de l'input|Non|String|`value='Votre email'`|`''`|
|placeholder|Défini le placeholder|Non|String|`placeholder='try paris'`|`'PLACE HOLDER PROPS MISSING'`|
|name|Défini le nom (pour les form)|Non|String|`name='firstname'`|none|

## Button (Maria)
* Import
```
import Button from '../components/Button';
```
* Exemple d'utilisation :
```
 <Button buttonTitle="Go"/>
```

* Props :
|Props Name|Description|Obligatoire ?|type de valeur|Example d'utilisation|Par Default|
|----|----|----|----|----|----|
|buttonTitle|une props qui représente le nom du bouton|Oui|string| buttonTitle="Résevation"|none|*


## Text/Title/Subtitle (Maria)
* Import
```
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';
```
* Exemple d'utilisation :
```
 <Title title="MonTitre" />
 <Subtitle subtitle="MonSous-titre" />
 <Text text="MonTexte" />
```

* Props :
|Props Name|Description|Obligatoire ?|type de valeur|Example d'utilisation|Par Default|
|----|----|----|----|----|----|
|title|une props qui représente le titre |Oui|string| title="MonTitre"
|subtitle|une props qui représente le sous-titre |Oui|string| subtitle="MonSous-titre"
|text|une props qui représente tout le texte du paragraphe |Oui|string| text="MonTexte"
