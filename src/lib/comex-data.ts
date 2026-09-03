export type Entity = {
  code: string;
  name: string;
  role: string;
  purpose: string;
  whenItMatters: string[];
  notes: string;
};

export const entities: Entity[] = [
  {
    code: "DIAN",
    name: "Dirección de Impuestos y Aduanas Nacionales",
    role: "Autoridad aduanera y tributaria",
    purpose:
      "Administra el régimen aduanero: clasificación arancelaria, declaraciones de importación y exportación, tributos aduaneros, controles y fiscalización posterior.",
    whenItMatters: [
      "Antes de definir la subpartida arancelaria de tu producto",
      "Al calcular arancel e IVA de la operación",
      "Cuando existe riesgo de inspección, aforo o sanción",
    ],
    notes:
      "Las declaraciones ante la DIAN se presentan a través de quienes están habilitados para ello. Nosotros explicamos el proceso; no lo tramitamos.",
  },
  {
    code: "ICA",
    name: "Instituto Colombiano Agropecuario",
    role: "Sanidad animal y vegetal",
    purpose:
      "Controla el ingreso y salida de productos agrícolas, pecuarios, insumos agropecuarios, alimentos para animales y material vegetal.",
    whenItMatters: [
      "Importación de alimentos para mascotas, semillas, madera o insumos agrícolas",
      "Exportación de flores, frutas o café con requisitos fitosanitarios",
      "Cuando el producto exige inspección en puerto o certificado sanitario",
    ],
    notes: "Requisitos que suelen definirse antes de comprar, no al llegar la carga.",
  },
  {
    code: "INVIMA",
    name: "Instituto Nacional de Vigilancia de Medicamentos y Alimentos",
    role: "Vigilancia sanitaria",
    purpose:
      "Autoriza y vigila alimentos, bebidas, cosméticos, dispositivos médicos, medicamentos y productos de aseo que se comercializan en Colombia.",
    whenItMatters: [
      "Tu producto es de consumo humano o de uso corporal",
      "Necesitas registro, permiso o notificación sanitaria previa",
      "Debes validar rotulado y etiquetado en español",
    ],
    notes:
      "El tiempo de obtención del registro sanitario suele ser el factor que define el cronograma real de la importación.",
  },
  {
    code: "VUCE",
    name: "Ventanilla Única de Comercio Exterior",
    role: "Punto único de trámites",
    purpose:
      "Centraliza en línea las solicitudes de permisos, autorizaciones y vistos buenos de las entidades que intervienen en una operación.",
    whenItMatters: [
      "Tu subpartida exige visto bueno previo al embarque",
      "Necesitas registro o licencia de importación",
      "Debes coordinar varias entidades para una misma carga",
    ],
    notes: "Un visto bueno tardío es una de las causas más frecuentes de sobrecostos de bodegaje.",
  },
  {
    code: "MINCIT",
    name: "Ministerio de Comercio, Industria y Turismo",
    role: "Política comercial",
    purpose:
      "Define la política de comercio exterior, negocia acuerdos comerciales y administra instrumentos como Plan Vallejo y zonas francas.",
    whenItMatters: [
      "Quieres evaluar beneficios arancelarios de un TLC",
      "Analizas zonas francas o regímenes especiales",
      "Necesitas entender medidas de defensa comercial",
    ],
    notes: "Aquí se define el marco; la aplicación práctica se verifica caso por caso.",
  },
  {
    code: "PROCOLOMBIA",
    name: "ProColombia",
    role: "Promoción de exportaciones",
    purpose:
      "Apoya al exportador colombiano con inteligencia de mercados, agendas comerciales y acompañamiento en internacionalización.",
    whenItMatters: [
      "Buscas compradores o mercados destino",
      "Preparas oferta exportable y precios de exportación",
      "Necesitas datos de demanda por país",
    ],
    notes: "Complementa el análisis, no reemplaza la evaluación de viabilidad y costos.",
  },
  {
    code: "BANREP",
    name: "Banco de la República",
    role: "Régimen cambiario",
    purpose:
      "Regula el mercado cambiario, publica la TRM y define cómo deben canalizarse los pagos de importaciones y exportaciones.",
    whenItMatters: [
      "Pagas o recibes divisas por una operación",
      "Necesitas entender obligaciones de canalización y reportes",
      "Presupuestas con tasa de cambio y cobertura",
    ],
    notes: "El riesgo cambiario suele pesar más que el arancel en el margen final.",
  },
  {
    code: "ANTINARCÓTICOS",
    name: "Policía Antinarcóticos",
    role: "Control de seguridad en carga",
    purpose:
      "Realiza inspección antinarcóticos de la carga y del contenedor en puertos, aeropuertos y pasos de frontera.",
    whenItMatters: [
      "Programas tiempos reales de salida o llegada de carga",
      "Evalúas riesgo de contaminación de contenedor",
      "Diseñas controles de seguridad con tu proveedor",
    ],
    notes: "La inspección es parte del cronograma normal: se planea, no se improvisa.",
  },
];

export type Stage = {
  id: string;
  index: string;
  title: string;
  summary: string;
  risks: string[];
  documents: string[];
  questions: string[];
};

export const importStages: Stage[] = [
  {
    id: "producto",
    index: "01",
    title: "Definición del producto",
    summary:
      "Antes de cotizar, el producto debe estar descrito técnicamente: material, uso, composición y presentación. De ahí sale todo lo demás.",
    risks: [
      "Clasificación arancelaria incorrecta por descripción imprecisa",
      "Descubrir tarde que el producto exige registro sanitario",
      "Producto restringido o prohibido para el uso previsto",
    ],
    documents: [
      "Ficha técnica del fabricante",
      "Fotografías y composición del producto",
      "Catálogo o especificación de uso final",
    ],
    questions: [
      "¿Qué subpartida arancelaria corresponde y por qué?",
      "¿El producto requiere permiso previo de alguna entidad?",
      "¿Se comercializará tal como llega o requiere transformación?",
    ],
  },
  {
    id: "origen",
    index: "02",
    title: "Origen y proveedor",
    summary:
      "El país de origen define aranceles preferenciales, riesgos comerciales y exigencias documentales. El proveedor define el riesgo de pago.",
    risks: [
      "Pagar anticipos sin verificación del proveedor",
      "Perder preferencia arancelaria por certificado de origen mal emitido",
      "Origen distinto al de embarque sin sustento documental",
    ],
    documents: [
      "Factura comercial y proforma",
      "Certificado de origen cuando aplica TLC",
      "Contrato o acuerdo de compra con Incoterm definido",
    ],
    questions: [
      "¿Existe acuerdo comercial vigente con ese país?",
      "¿Quién emite el certificado de origen y bajo qué criterio?",
      "¿Qué mecanismo de pago reduce el riesgo comercial?",
    ],
  },
  {
    id: "transporte",
    index: "03",
    title: "Transporte internacional",
    summary:
      "El Incoterm define dónde termina la responsabilidad del vendedor y dónde empieza tu costo real. No es un detalle contractual menor.",
    risks: [
      "Incoterm elegido sin entender qué costos asume cada parte",
      "Carga sin seguro adecuado frente al valor de la mercancía",
      "Tiempos de tránsito optimistas que rompen el flujo de caja",
    ],
    documents: [
      "Documento de transporte (B/L, guía aérea o carta de porte)",
      "Póliza o certificado de seguro de la carga",
      "Packing list y detalle de bultos",
    ],
    questions: [
      "¿Qué incluye realmente el Incoterm cotizado?",
      "¿Quién contrata y quién paga el seguro?",
      "¿Qué pasa si la carga se retrasa o llega averiada?",
    ],
  },
  {
    id: "aduana",
    index: "04",
    title: "Aduana e ingreso al país",
    summary:
      "Aquí se verifica lo que se declaró: valor, clasificación, origen y requisitos. Los errores anteriores se hacen visibles y costosos.",
    risks: [
      "Inspección o aforo por inconsistencias documentales",
      "Bodegaje por vistos buenos que no se gestionaron a tiempo",
      "Diferencias de valoración aduanera y ajustes de tributos",
    ],
    documents: [
      "Declaración de importación y sus soportes",
      "Vistos buenos o registros de importación",
      "Mandato al declarante habilitado",
    ],
    questions: [
      "¿El valor declarado está sustentado con documentos?",
      "¿Los permisos previos están vigentes al momento del arribo?",
      "¿Qué costos genera cada día de demora en puerto?",
    ],
  },
  {
    id: "impuestos",
    index: "05",
    title: "Tributos aduaneros",
    summary:
      "Arancel sobre valor CIF e IVA sobre la base gravable. Una subpartida distinta puede cambiar el margen de todo el negocio.",
    risks: [
      "Presupuestar sin IVA y quedar sin caja para el levante",
      "Asumir arancel 0% sin verificar el requisito de origen",
      "Ignorar medidas antidumping o salvaguardias aplicables",
    ],
    documents: [
      "Liquidación de tributos aduaneros",
      "Soportes del valor en aduana (fletes y seguro)",
      "Certificado de origen para preferencia arancelaria",
    ],
    questions: [
      "¿Cuál es el arancel real de mi subpartida?",
      "¿Cómo se compone la base gravable del IVA?",
      "¿El IVA es descontable en mi estructura tributaria?",
    ],
  },
  {
    id: "costos",
    index: "06",
    title: "Costo total y flujo de caja",
    summary:
      "El costo de importación no es el precio del proveedor. Es la suma de mercancía, logística, tributos, financieros y tiempos muertos.",
    risks: [
      "Margen calculado sobre costos incompletos",
      "Variación de TRM entre la compra y el pago",
      "Costos locales no previstos: bodegaje, inspección, transporte interno",
    ],
    documents: [
      "Estructura de costeo de la importación",
      "Facturas de servicios logísticos y portuarios",
      "Presupuesto de caja por hitos de la operación",
    ],
    questions: [
      "¿Cuál es mi costo unitario puesto en bodega?",
      "¿A qué TRM se rompe mi rentabilidad?",
      "¿Cuánto capital queda inmovilizado y por cuántos días?",
    ],
  },
  {
    id: "mercado",
    index: "07",
    title: "Mercado colombiano",
    summary:
      "Cerrar el círculo: precio de venta viable, canal, competencia y cumplimiento local del producto que acabas de traer.",
    risks: [
      "Precio final fuera de mercado frente a competencia local",
      "Rotulado o requisitos locales incumplidos para vender",
      "Inventario inmovilizado por demanda sobreestimada",
    ],
    documents: [
      "Análisis de precios y competencia",
      "Requisitos de etiquetado y comercialización",
      "Proyección de rotación de inventario",
    ],
    questions: [
      "¿A qué precio debo vender para sostener el margen?",
      "¿El producto cumple lo exigido para venderse aquí?",
      "¿La demanda soporta el volumen que estoy importando?",
    ],
  },
];

export type Need = {
  id: string;
  label: string;
  description: string;
  route: string[];
  focus: string;
};

export const needs: Need[] = [
  {
    id: "importar-primera-vez",
    label: "Quiero importar por primera vez",
    description:
      "Ruta de diagnóstico inicial: entender si tu producto es importable, con qué requisitos y a qué costo real.",
    route: [
      "Definición técnica del producto",
      "Clasificación arancelaria orientativa",
      "Requisitos y entidades aplicables",
      "Estimación de costo total",
      "Decisión: sigue o no sigue",
    ],
    focus: "Evitar comprar antes de entender.",
  },
  {
    id: "costos",
    label: "Necesito saber cuánto me cuesta",
    description:
      "Construcción de la estructura de costos completa, no solo el precio del proveedor.",
    route: [
      "Valor FOB y condiciones del Incoterm",
      "Flete y seguro hasta valor CIF",
      "Arancel e IVA según subpartida",
      "Costos locales y financieros",
      "Costo unitario puesto en bodega",
    ],
    focus: "Saber a qué precio deja de ser negocio.",
  },
  {
    id: "requisitos",
    label: "No sé qué permisos necesito",
    description: "Mapa de requisitos previos y entidades que intervienen antes del embarque.",
    route: [
      "Identificación de la subpartida",
      "Entidades de control aplicables",
      "Permisos, registros y vistos buenos",
      "Tiempos reales de obtención",
      "Cronograma antes de comprar",
    ],
    focus: "Ningún permiso se resuelve cuando la carga ya llegó.",
  },
  {
    id: "exportar",
    label: "Quiero exportar mi producto",
    description: "Evaluación de oferta exportable, mercado destino y viabilidad de precio.",
    route: [
      "Perfil del producto y capacidad",
      "Mercado destino y acceso arancelario",
      "Requisitos del país comprador",
      "Precio de exportación por Incoterm",
      "Ruta documental de la operación",
    ],
    focus: "Exportar es vender, no solo despachar.",
  },
  {
    id: "revisar",
    label: "Quiero revisar una operación en curso",
    description: "Segunda lectura de cotizaciones, documentos y liquidaciones antes de firmar.",
    route: [
      "Revisión de cotización y Incoterm",
      "Verificación documental",
      "Contraste de liquidación de tributos",
      "Identificación de riesgos abiertos",
      "Recomendaciones y preguntas al proveedor",
    ],
    focus: "Una revisión a tiempo vale menos que una corrección tardía.",
  },
  {
    id: "formacion",
    label: "Quiero formar a mi equipo",
    description: "Programas de formación práctica en comercio exterior para equipos de compras.",
    route: [
      "Diagnóstico de conocimiento del equipo",
      "Diseño de contenidos por rol",
      "Talleres con casos propios de la empresa",
      "Herramientas de costeo internas",
      "Seguimiento y evaluación",
    ],
    focus: "Que la empresa deje de depender de la intuición.",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "que-es-una-subpartida-arancelaria",
    category: "Aduanas",
    title: "¿Qué es una subpartida arancelaria y por qué define tu costo?",
    excerpt:
      "La subpartida no es un código administrativo: determina arancel, IVA, permisos previos y controles. Un dígito cambia el negocio.",
    readingTime: "7 min",
    body: [
      "Toda mercancía que cruza la frontera colombiana se identifica con un código de diez dígitos. Ese código, la subpartida arancelaria, es la traducción técnica de tu producto al lenguaje de la aduana.",
      "De la subpartida dependen cuatro cosas: el arancel aplicable, la tarifa de IVA, los permisos previos exigidos por entidades como INVIMA o ICA, y el nivel de control con el que la autoridad mira tu operación.",
      "El error más costoso no es equivocarse por descuido, sino clasificar según lo que el proveedor escribió en la factura. La descripción comercial del vendedor no es un criterio de clasificación: lo son la composición, la función y las reglas generales interpretativas del arancel.",
      "Antes de cotizar, exige ficha técnica. Antes de comprar, sustenta la clasificación por escrito. Y cuando existan dos subpartidas posibles, documenta por qué elegiste una: esa memoria es la que te defiende en una fiscalización posterior.",
    ],
  },
  {
    slug: "arancel-iva-base-gravable",
    category: "Aranceles e IVA",
    title: "Arancel, IVA y base gravable: cómo se liquida realmente una importación",
    excerpt:
      "El arancel se calcula sobre el valor CIF y el IVA sobre CIF más arancel. Entender el orden evita presupuestos que se caen en puerto.",
    readingTime: "6 min",
    body: [
      "El punto de partida es el valor en aduana, normalmente el valor CIF: mercancía, flete internacional y seguro. Sobre esa base se aplica el arancel correspondiente a la subpartida.",
      "El IVA no se calcula sobre el valor de la mercancía, sino sobre la base gravable, que incluye el valor en aduana más el arancel liquidado. Por eso un arancel alto arrastra también el IVA hacia arriba.",
      "Muchas empresas presupuestan la importación sin el IVA porque es descontable. Contablemente puede serlo; financieramente hay que pagarlo antes del levante. La caja no entiende de descuentos futuros.",
      "A esto se suman costos que no son tributos pero se sienten igual: bodegaje, inspecciones, transporte interno, gastos bancarios y diferencia en cambio.",
    ],
  },
  {
    slug: "incoterms-que-cambia-cada-sigla",
    category: "Incoterms",
    title: "Incoterms: qué cambia realmente cada sigla en tu costo y tu riesgo",
    excerpt:
      "FOB, CIF, EXW o DAP no son formas de cotizar: son repartos de costo, riesgo y responsabilidad documental.",
    readingTime: "8 min",
    body: [
      "Un Incoterm responde tres preguntas: hasta dónde paga el vendedor, dónde se transfiere el riesgo y quién asume cada obligación documental.",
      "Comparar una cotización FOB con una CIF sin ajustar la base es comparar cifras distintas. La primera no incluye flete ni seguro internacional; la segunda sí, con el margen que el vendedor decida cargar.",
      "El error frecuente en Colombia es asumir que un término que incluye entrega en destino elimina tu responsabilidad aduanera. La nacionalización sigue siendo del importador salvo casos muy específicos.",
      "Elige el Incoterm según tu capacidad de gestión y tu apetito de riesgo, no según qué número se ve más bajo en el correo del proveedor.",
    ],
  },
  {
    slug: "tlc-preferencia-arancelaria",
    category: "TLC",
    title: "TLC: por qué el arancel 0% no es automático",
    excerpt:
      "Un acuerdo comercial abre la puerta, pero la preferencia se gana con origen probado y documentado correctamente.",
    readingTime: "6 min",
    body: [
      "Que exista un TLC con el país de tu proveedor no significa que tu producto entre sin arancel. La preferencia depende de la subpartida, del cronograma de desgravación y del cumplimiento de las reglas de origen.",
      "Origen no es lugar de embarque. Un producto fabricado en un tercer país y reexpedido desde un socio comercial no adquiere origen por el trayecto.",
      "El certificado de origen debe ser emitido por quien está autorizado, con los datos coincidentes con la factura y el documento de transporte. Una inconsistencia menor puede costar toda la preferencia.",
      "Verifica el beneficio antes de negociar el precio: si el arancel preferencial es tu argumento de rentabilidad, debe estar confirmado por escrito.",
    ],
  },
  {
    slug: "registro-sanitario-antes-de-comprar",
    category: "Requisitos y entidades",
    title: "Registro sanitario: el permiso que define tu cronograma",
    excerpt:
      "Alimentos, cosméticos y dispositivos médicos exigen autorización previa. El tiempo del trámite manda sobre el tiempo del barco.",
    readingTime: "5 min",
    body: [
      "Cuando el producto es de consumo humano o de uso corporal, la pregunta relevante no es cuánto tarda el flete, sino cuánto tarda la autorización sanitaria.",
      "El error clásico es comprar primero y tramitar después. La mercancía llega, el permiso no existe, y cada día en puerto es costo puro.",
      "Antes de emitir la orden de compra: confirma si el producto requiere registro, permiso o notificación; identifica quién debe ser titular; y valida el rotulado exigido en español.",
      "Planear el trámite no es burocracia: es lo que evita que tu capital quede detenido en un contenedor.",
    ],
  },
  {
    slug: "costo-total-de-importacion",
    category: "Costos",
    title: "Costo total de importación: la fórmula que casi nadie completa",
    excerpt:
      "Mercancía, logística, tributos, costos locales, financieros y tiempo. Si falta una línea, el margen es ficción.",
    readingTime: "9 min",
    body: [
      "El costo de importación se construye por capas: valor de la mercancía, gastos hasta puerto de origen, flete y seguro internacional, tributos aduaneros, gastos portuarios y de agenciamiento, transporte interno y costos financieros.",
      "A eso se agrega una capa que rara vez se cuantifica: el tiempo. Capital inmovilizado durante sesenta días tiene un costo, aunque no aparezca en ninguna factura.",
      "Un buen modelo de costeo no entrega un número: entrega un punto de quiebre. A qué TRM, a qué volumen y a qué precio de venta la operación deja de ser rentable.",
      "Ese punto de quiebre es la información que realmente sirve para decidir.",
    ],
  },
  {
    slug: "riesgo-cambiario-trm",
    category: "Costos",
    title: "Riesgo cambiario: cuando la TRM se come el margen",
    excerpt:
      "Entre la negociación y el pago pasan semanas. En ese intervalo la tasa de cambio puede borrar la utilidad completa.",
    readingTime: "6 min",
    body: [
      "Una importación se cotiza en divisa y se vende en pesos. Entre esos dos momentos hay un intervalo, y el intervalo tiene riesgo.",
      "Presupuestar con la TRM del día de la cotización es una decisión, no un dato. Si el margen es del 12% y la tasa se mueve 10%, el negocio prácticamente desaparece.",
      "La disciplina mínima es calcular tres escenarios: tasa favorable, tasa esperada y tasa adversa. Y definir desde el inicio a qué nivel se detiene la operación.",
      "Existen mecanismos de cobertura; su conveniencia se evalúa con el perfil y el volumen de cada empresa, junto con su área financiera.",
    ],
  },
  {
    slug: "errores-frecuentes-primera-importacion",
    category: "Importación",
    title: "Siete errores frecuentes en la primera importación",
    excerpt:
      "Casi ninguno ocurre en la aduana. Ocurren antes, en decisiones que parecían menores.",
    readingTime: "7 min",
    body: [
      "Primero: pagar el 100% por anticipado a un proveedor sin verificación. Segundo: aceptar la clasificación arancelaria que sugiere el vendedor.",
      "Tercero: comparar cotizaciones con Incoterms distintos. Cuarto: no revisar si el producto exige permiso previo. Quinto: presupuestar sin IVA.",
      "Sexto: ignorar el costo del tiempo y de la inspección. Séptimo: no tener un plan si la carga llega averiada o incompleta.",
      "Ninguno de estos errores requiere mala suerte. Todos requieren únicamente haber avanzado sin entender.",
    ],
  },
  {
    slug: "exportar-desde-colombia-primeros-pasos",
    category: "Exportación",
    title: "Exportar desde Colombia: los primeros pasos que sí importan",
    excerpt:
      "Antes de buscar comprador, define oferta exportable, costo de exportación y requisitos del mercado destino.",
    readingTime: "7 min",
    body: [
      "Exportar empieza con una pregunta incómoda: ¿tienes capacidad real y sostenida para cumplir un pedido internacional?",
      "Después viene el acceso: qué arancel paga tu producto en destino, si hay acuerdo comercial aplicable y qué requisitos técnicos o sanitarios exige el comprador.",
      "El tercer paso es el precio de exportación, construido por Incoterm y no como el precio local más un porcentaje.",
      "Solo cuando esas tres piezas están claras vale la pena invertir en agendas comerciales y promoción.",
    ],
  },
  {
    slug: "entidades-de-control-quien-hace-que",
    category: "Requisitos y entidades",
    title: "Entidades de control: quién hace qué en una operación",
    excerpt:
      "DIAN, ICA, INVIMA, VUCE, MinCIT, ProColombia, Banco de la República y Policía Antinarcóticos. Cada una interviene en un momento distinto.",
    readingTime: "8 min",
    body: [
      "Una operación de comercio exterior no pasa por una sola autoridad. Pasa por varias, en momentos distintos, con requisitos que no se coordinan solos.",
      "La DIAN mira el régimen aduanero y los tributos. ICA e INVIMA miran el producto según su naturaleza. VUCE es el canal para los vistos buenos. El Banco de la República define cómo se canalizan las divisas.",
      "MinCIT define política e instrumentos; ProColombia acompaña al exportador; la Policía Antinarcóticos inspecciona la carga por razones de seguridad.",
      "Saber quién interviene y cuándo es lo que convierte un cronograma optimista en un cronograma realista.",
    ],
  },
];

export const articleCategories = [
  "Importación",
  "Exportación",
  "Aduanas",
  "Aranceles e IVA",
  "TLC",
  "Incoterms",
  "Costos",
  "Requisitos y entidades",
];
