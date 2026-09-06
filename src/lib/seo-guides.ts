import type { GuideData } from "@/components/seo-guide";

const baseSources = [
  { label: "DIAN — Aduanas", url: "https://www.dian.gov.co/aduanas/Paginas/Inicio.aspx" },
  { label: "VUCE — Comercio exterior", url: "https://www.vuce.gov.co/" },
];

export const seoGuides: Record<string, GuideData> = {
  "como-importar-a-colombia": { eyebrow: "Importación", title: "Cómo importar a Colombia sin empezar por el flete", intro: "Una ruta práctica para validar producto, clasificación, permisos y costos antes de enviarle dinero al proveedor.", points: [
    { title: "Describe el producto", text: "Material, composición, uso, presentación y ficha técnica son el punto de partida. Sin esa información, la clasificación y los permisos son apenas suposiciones." },
    { title: "Clasifica y revisa requisitos", text: "La subpartida determina arancel, IVA y entidades de control. Confirma si hay registros, vistos buenos o restricciones antes del embarque." },
    { title: "Calcula el costo completo", text: "Suma mercancía, flete, seguro, tributos, costos locales, financiación y margen de imprevistos. El precio FOB nunca es el costo puesto en Colombia." },
    { title: "Decide antes de ejecutar", text: "Compara el costo unitario con el precio de venta y la demanda real. Si el margen no resiste cambios de TRM o demoras, todavía no es momento de comprar." },
  ], faq: [{ question: "¿Necesito empresa para importar?", answer: "Depende de la modalidad, frecuencia y finalidad. Para una operación comercial conviene revisar obligaciones tributarias, cambiarias y aduaneras antes de comprar." }, { question: "¿Tu Asesor de Comex hace el trámite?", answer: "No. Analizamos y explicamos la operación; la ejecución corresponde a actores habilitados." }], sources: baseSources },
  "cuanto-cuesta-importar-a-colombia": { eyebrow: "Costos", title: "¿Cuánto cuesta importar a Colombia de verdad?", intro: "La cuenta completa incluye mucho más que el precio que aparece en la cotización del proveedor.", points: [
    { title: "Mercancía y transporte", text: "Define qué incluye el Incoterm. FOB, CIF o EXW trasladan costos y riesgos distintos al comprador." },
    { title: "Valor en aduana", text: "Normalmente parte del valor CIF: mercancía, transporte internacional y seguro. Es la base para calcular el arancel." },
    { title: "Arancel e IVA", text: "El arancel depende de la subpartida y del origen. El IVA se calcula sobre el valor en aduana más el arancel." },
    { title: "Costos que se esconden", text: "Bodegaje, inspecciones, transporte interno, gastos bancarios y diferencia en cambio pueden mover de forma importante el costo final." },
  ], faq: [{ question: "¿El IVA hace parte del costo?", answer: "Aunque pueda ser descontable según tu situación, sí representa una necesidad de caja para obtener el levante." }, { question: "¿La calculadora es una liquidación oficial?", answer: "No. Es una estimación educativa que debes validar con la clasificación y las condiciones reales." }], sources: baseSources },
  "partidas-arancelarias": { eyebrow: "Clasificación", title: "Partidas arancelarias: el código que cambia toda la operación", intro: "Un número define tributos, permisos y controles. Por eso no conviene copiar sin más el código que envía el proveedor.", points: [
    { title: "Qué identifica", text: "La subpartida colombiana tiene diez dígitos y describe una mercancía según sus características técnicas y reglas de clasificación." },
    { title: "Qué determina", text: "De ella se desprenden arancel, IVA, vistos buenos, restricciones y, en algunos casos, medidas de defensa comercial." },
    { title: "Cómo sustentarla", text: "Trabaja con ficha técnica, composición, función y presentación. Documenta el razonamiento y consulta a profesionales cuando exista ambigüedad." },
  ], faq: [{ question: "¿La partida de China sirve en Colombia?", answer: "Los primeros seis dígitos se armonizan internacionalmente, pero la desagregación y los requisitos deben validarse en Colombia." }], sources: baseSources },
  aranceles: { eyebrow: "Tributos", title: "Aranceles en Colombia, explicados sin vueltas", intro: "Qué son, sobre qué base se calculan y por qué el país de origen puede cambiar la tarifa.", points: [
    { title: "La tarifa", text: "Puede ser porcentual, específica o mixta, y depende de la clasificación arancelaria del producto." },
    { title: "La base", text: "En una importación ordinaria el arancel suele aplicarse sobre el valor en aduana, generalmente construido desde el CIF." },
    { title: "Preferencias de origen", text: "Un acuerdo comercial puede reducir la tarifa solo si el producto cumple la regla de origen y cuenta con el soporte correcto." },
  ], faq: [{ question: "¿Todo paga arancel?", answer: "No. Hay tarifas de cero por clasificación o preferencia, pero siempre deben verificarse las condiciones aplicables." }], sources: baseSources },
  incoterms: { eyebrow: "Negociación", title: "Incoterms: quién paga, quién arriesga y hasta dónde", intro: "Las tres letras de la cotización no son decoración: reparten costos, obligaciones y el momento en que cambia el riesgo.", points: [
    { title: "No definen propiedad", text: "Los Incoterms organizan entrega, costos y riesgo, pero no sustituyen el contrato ni fijan por sí solos la transferencia de propiedad." },
    { title: "FOB y CIF", text: "En FOB el comprador asume el transporte principal; en CIF el vendedor lo contrata, aunque el riesgo se transfiere antes de llegar a destino." },
    { title: "El mejor depende del caso", text: "Volumen, experiencia, control logístico y capacidad de negociar servicios determinan qué regla conviene." },
  ], faq: [{ question: "¿CIF significa todo incluido?", answer: "No. No incluye automáticamente costos de destino, tributos ni entrega final en tu bodega." }], sources: [{ label: "ICC — Incoterms", url: "https://iccwbo.org/business-solutions/incoterms-rules/" }, ...baseSources] },
  "requisitos-importacion": { eyebrow: "Requisitos", title: "Requisitos para importar a Colombia: revisa antes de embarcar", intro: "Los permisos dependen del producto, su uso y su clasificación. Descubrirlos cuando la carga llega suele salir caro.", points: [
    { title: "Clasificación primero", text: "La subpartida conecta tu producto con los controles, vistos buenos y documentos aplicables." },
    { title: "Entidades según producto", text: "INVIMA puede intervenir en alimentos, cosméticos o dispositivos; ICA en mercancías de origen animal o vegetal; otras autoridades según el riesgo." },
    { title: "Momento del requisito", text: "Algunas autorizaciones deben existir antes del embarque. El cronograma comercial debe obedecer al regulatorio y no al revés." },
  ], faq: [{ question: "¿Todos los productos necesitan licencia?", answer: "No. Depende del régimen y de los controles asignados a la subpartida y al producto específico." }], sources: baseSources },
};