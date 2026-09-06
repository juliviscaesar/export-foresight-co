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
  "importar-desde-china": { eyebrow: "Origen", title: "Importar desde China a Colombia, sin comprar a ciegas", intro: "Proveedor, muestra, pago, Incoterm y costo real: las decisiones que debes ordenar antes de transferir dinero.", points: [
    { title: "Valida al proveedor", text: "Contrasta registro, referencias, capacidad productiva y titularidad de la cuenta de pago. Una videollamada o catálogo no sustituyen la debida diligencia." },
    { title: "Cierra la especificación", text: "Aprobación de muestra, materiales, tolerancias, empaque y control de calidad deben quedar documentados antes de producir." },
    { title: "Compara sobre la misma base", text: "No compares EXW, FOB y CIF como si incluyeran lo mismo. Lleva cada oferta a costo puesto en Colombia." },
  ], faq: [{ question: "¿Conviene comprar CIF?", answer: "Depende del control que necesites y de los costos en destino. CIF no equivale a entrega en tu bodega." }], sources: baseSources },
  "importar-desde-mexico": { eyebrow: "Origen", title: "Importar desde México a Colombia: origen, documentos y costo", intro: "La cercanía ayuda, pero el beneficio arancelario no es automático: hay que demostrar origen y completar la cuenta.", points: [
    { title: "Verifica el origen", text: "País de despacho y país de origen no siempre coinciden. La preferencia depende del cumplimiento de reglas y del soporte documental." },
    { title: "Revisa requisitos", text: "Clasifica el producto y confirma vistos buenos, etiquetado o registros exigidos en Colombia." },
    { title: "Modela tiempos y caja", text: "Incluye tránsito, nacionalización, tributos y costos locales en el cronograma financiero." },
  ], faq: [{ question: "¿Todo producto mexicano paga cero arancel?", answer: "No. La tarifa preferencial depende del producto, la regla de origen y la documentación válida." }], sources: baseSources },
  "importar-desde-usa": { eyebrow: "Origen", title: "Importar desde Estados Unidos a Colombia con criterio", intro: "Cómo revisar la preferencia arancelaria, la documentación y el costo puesto en bodega antes de comprar.", points: [
    { title: "No asumas origen", text: "Comprar a una empresa estadounidense no convierte el producto en originario de Estados Unidos." },
    { title: "Sustenta la preferencia", text: "Revisa la regla de origen aplicable y conserva la certificación y documentos que soportan el tratamiento arancelario." },
    { title: "Calcula más allá del courier", text: "Para operaciones comerciales contempla clasificación, impuestos, permisos, manejo y entrega local." },
  ], faq: [{ question: "¿El TLC elimina siempre el arancel?", answer: "No. Solo aplica cuando la mercancía cumple la regla de origen y la preferencia prevista para su clasificación." }], sources: baseSources },
  invima: { eyebrow: "Entidades", title: "INVIMA en importaciones: cuándo aparece y qué revisar", intro: "Alimentos, cosméticos, medicamentos y dispositivos pueden exigir autorizaciones antes de llegar a Colombia.", points: [
    { title: "Identifica la categoría", text: "El uso, composición y presentación determinan el tipo de control sanitario y la autorización aplicable." },
    { title: "Revisa antes de embarcar", text: "Registro, permiso, notificación, rotulado y titularidad pueden afectar el cronograma y la posibilidad de comercializar." },
    { title: "Alinea documentos", text: "Ficha técnica, etiqueta, fabricante y factura deben describir el mismo producto sin contradicciones." },
  ], faq: [{ question: "¿Todo alimento necesita registro?", answer: "La exigencia depende del riesgo, la presentación y el régimen aplicable. Debe verificarse para cada producto." }], sources: [{ label: "INVIMA", url: "https://www.invima.gov.co/" }, ...baseSources] },
  ica: { eyebrow: "Entidades", title: "ICA en importaciones: sanidad animal y vegetal", intro: "Semillas, madera, alimentos para animales y otros productos agropecuarios requieren una revisión temprana.", points: [
    { title: "Define el producto", text: "Origen biológico, transformación, uso y composición permiten identificar el control sanitario o fitosanitario." },
    { title: "Consulta requisitos", text: "Permisos, certificados del país de origen e inspección pueden ser obligatorios antes o al momento del ingreso." },
    { title: "Planea el punto de entrada", text: "No todos los puertos o aeropuertos tienen la misma capacidad de inspección para cada mercancía." },
  ], faq: [{ question: "¿La madera necesita ICA?", answer: "Puede requerir control según especie, grado de transformación, empaque y uso. Consulta el caso concreto." }], sources: [{ label: "ICA", url: "https://www.ica.gov.co/" }, ...baseSources] },
  dian: { eyebrow: "Entidades", title: "DIAN y comercio exterior: lo que sí debes entender", intro: "La autoridad aduanera verifica clasificación, valor, origen, tributos y cumplimiento documental.", points: [
    { title: "Clasificación y tributos", text: "La subpartida conecta la mercancía con arancel, IVA y controles. El importador debe poder sustentar su decisión." },
    { title: "Valoración", text: "El valor declarado debe corresponder a la transacción y sumar los ajustes exigibles, con soportes coherentes." },
    { title: "Control posterior", text: "El levante no cierra toda revisión. Conserva documentos y trazabilidad de las decisiones de la operación." },
  ], faq: [{ question: "¿Tu Asesor presenta declaraciones?", answer: "No. Explicamos y analizamos; la ejecución aduanera corresponde a quienes estén habilitados." }], sources: baseSources },
  vuce: { eyebrow: "Entidades", title: "VUCE: permisos y vistos buenos antes de importar", intro: "La Ventanilla Única articula trámites de distintas entidades y puede definir si tu carga está lista para embarcar.", points: [
    { title: "Qué centraliza", text: "Solicitudes de registros, licencias, vistos buenos y autorizaciones vinculadas al comercio exterior." },
    { title: "Cuándo revisar", text: "Antes de comprar y antes de embarcar, según el requisito. Esperar al arribo puede causar demoras y bodegajes." },
    { title: "Qué preparar", text: "Información del producto, subpartida, fabricante, importador y documentos técnicos consistentes." },
  ], faq: [{ question: "¿VUCE reemplaza a las entidades?", answer: "No. Centraliza trámites, pero cada autoridad evalúa los requisitos de su competencia." }], sources: baseSources },
};