// import type {
//   QueryResolvers,
//   MutationResolvers,
//   PackItemRelationResolvers,
// } from 'types/graphql'

// import { db } from 'src/lib/db'

// export const packItems: QueryResolvers['packItems'] = () => {
//   return db.packItem.findMany()
// }

// export const packItem: QueryResolvers['packItem'] = ({ id }) => {
//   return db.packItem.findUnique({
//     where: { id },
//   })
// }

// export const createPackItem: MutationResolvers['createPackItem'] = ({
//   input,
// }) => {
//   return db.packItem.create({
//     data: input,
//   })
// }

// export const updatePackItem: MutationResolvers['updatePackItem'] = ({
//   id,
//   input,
// }) => {
//   return db.packItem.update({
//     data: input,
//     where: { id },
//   })
// }

// export const deletePackItem: MutationResolvers['deletePackItem'] = ({ id }) => {
//   return db.packItem.delete({
//     where: { id },
//   })
// }

// export const PackItem: PackItemRelationResolvers = {
//   pack: (_obj, { root }) => {
//     return db.packItem.findUnique({ where: { id: root?.id } }).pack()
//   },
// }
