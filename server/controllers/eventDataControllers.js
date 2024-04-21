import prisma from "../DB/db.config.js";

export const specificEventController = async (req, res) => {
  const eventData = await prisma.event.findUnique({
    where: {
      event_id: Number(req.params.eventId),
    },
    include: {
      images: {
        select: {
          image_src: true,
        },
      },
      guidelines: {
        select: {
          guideline: true,
        },
      },
      tc: {
        select: {
          tc: true,
        },
      },
    },
  });
  res.json(eventData);
};

export const youthFestPageController = async (req, res) => {
  const pageData = await prisma.fest.findUnique({

    where: {
      fest_id: 1,
    },
    include: {
      events: {
        select: {
          event_id: true,
          event_name: true,
          event_desc: true,
          fest_identifier: true,
          images: {
            select: {
              image_src: true,
            }
          },
        },
      },
    },
  });
  res.json(pageData);
};
