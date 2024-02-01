import { createBucketClient } from "@cosmicjs/sdk";

//AUTENTICAÇÃO
const cosmic = createBucketClient({
  bucketSlug: "tcff-production",
  readKey: "ZV7KdJrupJP2ae6WHVCIE56zxZwLFHSBJZOb4f5juK4DcHyJz9",
  writeKey: "qOhIKai31DIr9oeFyLKl974G9uk3Lnpsc95cr8D1BKQMYiuTVt",
});

// OBTER TODOS OS TORNEIOS (PARA LISTA)
export async function getAllTorneios() {
  const data = await cosmic.objects
    .find({ type: "torneios" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER O TORNEIO CORRESPONDENTE À SLUG
export async function getTorneiosBySlug(torneioSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "torneios",
      slug: torneioSlug,
    })
    .props("id,slug,title,metadata")
    .depth(1);

  return data.object;
}

// OBTER STAFF (PARA LISTA)
export async function getAllStaff() {
  const data = await cosmic.objects
    .find({ type: "staff" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER O ELEMENTO DO STAFF CORRESPONDENTE À SLUG
export async function getStaffBySlug(StaffSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "staff",
      slug: StaffSlug,
    })
    .props("id,type,slug,title,metadata")
    .depth(1);

  return data.object;
}

// OBTER DIREÇÃO (PARA LISTA)
export async function getAllDirecao() {
  const data = await cosmic.objects
    .find({ type: "direcao" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER O ELEMENTO DA DIREÇÃO CORRESPONDENTE À SLUG
export async function getDirecaoBySlug(DirecaoSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "direcao",
      slug: DirecaoSlug,
    })
    .props("id,type,slug,title,metadata")
    .depth(1);

  return data.object;
}


// OBTER PATROCINADORES (PARA LISTA)
export async function getAllPatrocinadores() {
  const data = await cosmic.objects
    .find({ type: "patrocinadores" })
    .props("id,slug,title,metadata")
    .depth(1);
  return data.objects;
}

// OBTER O ELEMENTO DOS PATROCINADORES CORRESPONDENTE À SLUG
export async function getPatrocinadoresBySlug(PatrocinadoresSlug) {
  const data = await cosmic.objects
    .findOne({
      type: "patrocinadores",
      slug: PatrocinadoresSlug,
    })
    .props("id,type,slug,title,metadata")
    .depth(1);

  return data.object;
}
