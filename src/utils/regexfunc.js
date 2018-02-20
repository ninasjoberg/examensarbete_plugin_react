
export default function useRegex(inputString) {

    inputString.trim();
    let ingredientObject = {};

    const re1 = /(\d+)\s*(kilo|kg|gram|g|milligram|mg|liter|l|deciliter|dl|centiliter|cl|milliliter|ml|matsked|msk|tesked|tsk|kryddmått|krm|blad|krukor|kruka|koppar|kopp|nypor|nypa|stycken|st|förpackning|förpackningar|förp|klyftor|klyfta)\s(\D+)/;
    const re2 = /\d+\s+\D+/;
    const re3 = /^\D+/;

    if(inputString.match(re1)){
        //dela upp i siffra, mått, ingrediens
        ingredient = inputString.split(/(kilo|kg|gram|g|milligram|mg|liter|l|deciliter|dl|centiliter|cl|milliliter|ml|matsked|msk|tesked|tsk|kryddmått|krm|blad|krukor|kruka|koppar|kopp|nypor|nypa|stycken|st|förpackning|förpackningar|förp|klyftor|klyfta)\s/);
        ingredientObject.amount = ingredient[0].match(/[^a-z+å+ä+ö ]+/)[0]; //för att få bort 'ca' osv framför ett antal
        ingredientObject.type = ingredient[1];
        ingredientObject.name = ingredient[2];

    } else if (inputString.match(re2)) {
        //dela upp i siffra och ingrediens
        index = inputString.search(/\d\s+\D/);
        ingredientObject.amount = inputString.substring(0,index+1);
        ingredientObject.name = inputString.slice(index+2);

    } else if (inputString.match(re3)) {
        //dela inte upp, sök direkt på ingrediens
        ingredientObject.name = inputString;
    }

    return ingredientObject;
}