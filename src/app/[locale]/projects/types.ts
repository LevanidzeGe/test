export interface CollectionWrapper {
  items?: { [key: string]: CollectionProps };
  categories?: any; // Optional: type it properly if needed
  metadata?: {
    collectionTimestamp?: number;
  };
  [key: string]: any; // in case other stuff exists
}

export interface CollectionProps {
  id: string;
  images?: string[];
  itemActive?: boolean;
  itemTimestamp?: number;

  // ✅ All possible booleans
  booleans?: {
    option1?: boolean;
    option2?: boolean;
    option3?: boolean;
    option4?: boolean;
    option5?: boolean;
    option6?: boolean;
    option7?: boolean;
    option8?: boolean;
  };

  // ✅ All possible translatable texts
  transTexts?: {
    title?: { [locale: string]: string };
    description?: { [locale: string]: string };
    name?: { [locale: string]: string };
    tag?: { [locale: string]: string };
    subTitle?: { [locale: string]: string };
    tag2?: { [locale: string]: string };
    text1?: { [locale: string]: string };
    text2?: { [locale: string]: string };
    text3?: { [locale: string]: string };
  };

  // ✅ All possible non-translatable texts
  noTransTexts?: {
    title?: string;
    name?: string;
    text?: string;
    tag?: string;
    price?: string;
    date?: string;
    location?: string;
    link1?: string;
    link2?: string;
  };

  // ✅ All possible number fields
  numberValues?: {
    number1?: number;
    number2?: number;
    number3?: number;
    number4?: number;
  };

  // ✅ Optional: categories (already in your logic)
  category: {
    [locale: string]: string;
  };
}
export type ReturnTypeOfExtract = ReturnType<typeof extractCollectionFields>;
export function extractCollectionFields(item: CollectionProps, locale: string) {
  const trans = item.transTexts || {};
  const noTrans = item.noTransTexts || {};
  const bools = item.booleans || {};
  const numbers = item.numberValues || {};

  return {
    id: item.id,
    images: item.images || [],
    itemActive: item.itemActive || false,
    itemTimestamp: item.itemTimestamp || 0,
    category: item.category?.[locale] || "category",

    // Translatable texts
    transTitle: trans.title?.[locale] || "title",
    transDescription: trans.description?.[locale] || "description",
    transName: trans.name?.[locale] || "name",
    transTag: trans.tag?.[locale] || "tag",
    transSubTitle: trans.subTitle?.[locale] || "subTitle",
    transTag2: trans.tag2?.[locale] || "tag2",
    transText1: trans.text1?.[locale] || "text1",
    transText2: trans.text2?.[locale] || "text2",
    transText3: trans.text3?.[locale] || "text3",

    // Non-translatable texts
    noTransTitle: noTrans.title || "title",
    noTransName: noTrans.name || "name",
    noTransText: noTrans.text || "text",
    noTransTag: noTrans.tag || "tag",
    noTransPrice: noTrans.price || "price",
    noTransDate: noTrans.date || "date",
    noTransLocation: noTrans.location || "location",
    noTransLink1: noTrans.link1 || "link1",
    noTransLink2: noTrans.link2 || "link2",

    boolOption1: bools.option1 ?? false,
    boolOption2: bools.option2 ?? false,
    boolOption3: bools.option3 ?? false,
    boolOption4: bools.option4 ?? false,
    boolOption5: bools.option5 ?? false,
    boolOption6: bools.option6 ?? false,
    boolOption7: bools.option7 ?? false,
    boolOption8: bools.option8 ?? false,

    // Numbers (explicit)
    number1: numbers.number1 ?? null,
    number2: numbers.number2 ?? null,
    number3: numbers.number3 ?? null,
    number4: numbers.number4 ?? null,

    // Category

    // Original object
    full: item,
  };
}
