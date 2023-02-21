import { noDuplicateItems } from './utils';

// Add new Collection when Checked
export function addToCollection(artworks, activesForms) {
  const availableArtworks = [];
  const availableForms = [];

  /* Filter Level One = Get the corresponding artworks in JSON file  */
  if (activesForms.length > 1) {
    activesForms.forEach((active) => {
    const filteredLevelOne = artworks.filter((artwork) => (
      artwork.attributes[active.form] === active.value
    ));
    
    availableArtworks.push(...filteredLevelOne);
    availableForms.push(active.form);
    });
  
  /* Filter Level Two = Compare JSON Artworks with CheckBox Values */
  /* Step One : Construct Unique Array */
  const uniqueArtworks = availableArtworks.filter(noDuplicateItems);
  const uniqueForms = availableForms.filter(noDuplicateItems);

  /* Step Two : Get All Forms with their Respective Values
  If Forms.length is not > 1, don't waste Performance in this Process and Skip it */
  if (uniqueForms.length > 1) {
    const formsWithValues = [];
    uniqueForms.forEach((form) => {
    const filteredValues = activesForms.map((active) => active.form === form ? active.value : "none")
    .filter((item) => item !== "none");
    if (filteredValues) { formsWithValues.push({form, value: filteredValues}) };
    });
  
    /* Final Step : Call Deep Filter Func and Return Artworks */
    return deepFilter(formsWithValues, uniqueArtworks);
  }

  /* If Performence is Skipped, Return this */
  return availableArtworks;

  } else {
  /* If it's the First Checkbox Checked */
    const artworkFound = artworks.filter((artwork) => (
      artwork.attributes[activesForms[0].form] === activesForms[0].value
    ));
    if (artworkFound) return artworkFound;
  };
};


// Remove Active Form when UnChecked
export function removeActiveForms(activesForms, checkboxValue, formTitle) {
  const index = activesForms.findIndex(object => {
    return (
    object.value === checkboxValue 
    && object.form === formTitle
    );
  });

  return activesForms.splice(index, 1);
};

// Build Deep filter Funtion => Isn't Dynamic for Now
// This Func will Creates retreives our Checkbox Values (3 Level => Shape, Background, Shape-Color)
// For Each Values it will filter the previous table (funnel mode)
export function deepFilter(formsWithValues, uniqueArtworks) {
  let resultArtworks_1 = [];
  let resultArtworks_2 = [];
  let resultArtworks_3 = [];
  let countIndex = 0;

  formsWithValues.forEach((elements, index) => {

    if (index === 0) {
        countIndex++
        elements.value.forEach((value) => {
        const filter = uniqueArtworks.filter((artwork) => artwork.attributes[elements.form] === value);
        if (filter) { resultArtworks_1.push(...filter) };
      });
    }

    if (index === 1) {
        countIndex++
        elements.value.forEach((value) => {
        const filter = resultArtworks_1.filter((artwork) => artwork.attributes[elements.form] === value);
        if (filter.length > 0) { resultArtworks_2.push(...filter) };
      });
    };

    if (index === 2) {
        countIndex++
        elements.value.forEach((value) => {
        const filter = resultArtworks_2.filter((artwork) => artwork.attributes[elements.form] === value);
        if (filter.length > 0) { resultArtworks_3.push(...filter) };
      });
    }
  });

    const collections = [];
    collections.push(resultArtworks_1, resultArtworks_2, resultArtworks_3);
    return collections[countIndex-1];
};
