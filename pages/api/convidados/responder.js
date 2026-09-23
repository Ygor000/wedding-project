import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method !== "PATCH") {
        res.setHeader("Allow", ["PATCH"]);

        return res.status(405).json({
            erro: "Método não permitido",
        });
    }

    try {
        const { id, confirmacao } = req.body;

        if (!id) {
            return res.status(400).json({
                erro: "Convidado não informado.",
            });
        }

        if (typeof confirmacao !== "boolean") {
            return res.status(400).json({
                erro: "Resposta inválida.",
            });
        }

        const convidado = await prisma.convidado.update({
            where: {
                id,
            },

            data: {
                confirmacao,
            },

            select: {
                id: true,
                nome: true,
                sobrenome: true,
                apelido: true,
                confirmacao: true,
            },
        });

        return res.status(200).json(convidado);

    } catch (error) {
        console.error("Erro ao atualizar confirmação:", error);

        return res.status(500).json({
            erro: "Não foi possível atualizar a confirmação.",
        });
    }
}