import { Request, Response } from "express";
import AppError from "../errors/AppError";
import TicketTag from '../models/TicketTag';
import Tag from '../models/Tag'

export const store = async (req: Request, res: Response): Promise<Response> => {
  const { ticketId, tagId } = req.params;

  try {
    const ticketTag = await TicketTag.create({ ticketId, tagId });
    return res.status(201).json(ticketTag);
  } catch (error) {
    return res.status(500).json({ error: 'No se pudo almacenar la etiqueta del chat.' });
  }
};

/*
export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { ticketId } = req.params;



  try {
    await TicketTag.destroy({ where: { ticketId } });
    return res.status(200).json({ message: 'Las etiquetas de los chats se eliminaron correctamente.' });
  } catch (error) {
    return res.status(500).json({ error: 'No se pudieron eliminar las etiquetas de los chats.' });
  }
};
*/
export const remove = async (req: Request, res: Response): Promise<Response> => {
  const { ticketId } = req.params;


  try {
    // Retrieve tagIds associated with the provided ticketId from TicketTags
    const ticketTags = await TicketTag.findAll({ where: { ticketId } });
    const tagIds = ticketTags.map((ticketTag) => ticketTag.tagId);

    // Find the tagIds with kanban = 1 in the Tags table
    const tagsWithKanbanOne = await Tag.findAll({
      where: {
        id: tagIds,
        kanban: 1,
      },
    });

    // Remove the tagIds with kanban = 1 from TicketTags
    const tagIdsWithKanbanOne = tagsWithKanbanOne.map((tag) => tag.id);
    if (tagIdsWithKanbanOne)
    await TicketTag.destroy({ where: { ticketId, tagId: tagIdsWithKanbanOne } });

    return res.status(200).json({ message: 'Las etiquetas de los chats se eliminaron correctamente.' });
  } catch (error) {
    return res.status(500).json({ error: 'No se pudieron eliminar las etiquetas de los chats.' });
  }
};
