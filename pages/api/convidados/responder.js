import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method !== "PATCH") {
        return res.status(405).json({
            erro: "Método não permitido",
        });
    }

    const { id, confirmacao } = req.body;

    if (!id || typeof confirmacao !== "boolean") {
        return res.status(400).json({
            erro: "Dados inválidos.",
        });
    }

    try {
        await prisma.convidado.update({
            where: {
                id,
            },
            data: {
                confirmacao,
            },
        });

        return res.status(200).json({
            sucesso: true,
        });
    } catch (error) {
        console.error("Erro ao registrar presença:", error);

        return res.status(500).json({
            erro: "Não foi possível registrar a resposta.",
        });
    }
}