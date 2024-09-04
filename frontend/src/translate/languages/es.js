const messages = {
  es: {
    translations: {
      signup: {
          title: "Registrarse",
          toasts: {
          success: "¡Usuario creado exitosamente! ¡Inicie sesión ahora!",
          fail: "Error al crear usuario. Verifique los datos ingresados.",
          },
          form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
          },
          buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
          },
          },
          login: {
          title: "Iniciar sesión",
          form: {
          email: "Correo electrónico",
          password: "Contraseña",
          },
          buttons: {
          submit: "Ingresar",
          register: "¡Regístrate ahora!",
          },
          },
          plans: {
          form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programaciones",
          enabled: "Habilitadas",
          disabled: "Deshabilitadas",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "USD",
          },
          },
          companies: {
          title: "Registrar Empresa",
          form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrarse",
          success: "¡Empresa creada exitosamente!",
          },
          },
          auth: {
          toasts: {
          success: "¡Inicio de sesión exitoso!",
          },
          token: "Token",
          },
          dashboard: {
          charts: {
          perDay: {
          title: "Atenciones hoy: ",
          },
          },
          },
          connections: {
          title: "Conexiones",
          toasts: {
          deleted: "¡Conexión con WhatsApp eliminada correctamente!",
          },
          confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
          "¿Estás seguro? Necesitarás escanear el código QR nuevamente.",
          },
          buttons: {
          add: "Agregar WhatsApp",
          disconnect: "Desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
          },
          toolTips: {
          disconnected: {
          title: "Error al iniciar sesión en WhatsApp",
          content:
          "Asegúrate de que tu celular esté conectado a internet e intenta nuevamente, o solicita un nuevo código QR",
          },
          qrcode: {
          title: "Esperando lectura del código QR",
          content:
          "Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu celular para iniciar la sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
            },
            timeout: {
            title: "Se perdió la conexión con el celular",
            content:
            "Asegúrate de que tu celular esté conectado a internet y WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
            },
        },
        table: {
          name: "Nombre",
          status: "Estado",
          lastUpdate: "Última actualización",
          default: "Predeterminado",
          actions: "Acciones",
          session: "Sesión",
          },
          },
          whatsappModal: {
          title: {
          add: "Agregar WhatsApp",
          edit: "Editar WhatsApp",
          },
          tabs: {
          general: "General",
          messages: "Mensajes",
          assessments: "Evaluaciones",
          integrations: "Integraciones",
          schedules: "Horario de atención",
          },
          form: {
          name: "Nombre",
          default: "Predeterminado",
          sendIdQueue: "Departamento",
          timeSendQueue: "Redirigir a la Departamento en X minutos",
          queueRedirection: "Redirección de Departamento",
          outOfHoursMessage: "Mensaje fuera del horario de atención",
          queueRedirectionDesc: "Seleccione una Departamento para redirigir los contactos que no tienen una Departamento asignada",
          prompt: "Prompt",
          maxUseBotQueues: "Enviar bot x veces",
          timeUseBotQueues: "Intervalo en minutos entre envío de bot",
          expiresTicket: "Cerrar chats abiertos después de x minutos",
          expiresInactiveMessage: "Mensaje de cierre por inactividad",
          greetingMessage: "Mensaje de bienvenida",
          complationMessage: "Mensaje de conclusión",
          sendIdQueue: "Departamento",
          },
          buttons: {
          okAdd: "Agregar",
          okEdit: "Guardar",
          cancel: "Cancelar",
          },
          success: "WhatsApp guardado exitosamente.",
          },
          qrCode: {
          message: "Lea el código QR para iniciar la sesión",
          },
          contacts: {
          title: "Contactos",
          toasts: {
          deleted: "¡Contacto eliminado correctamente!",
          deletedAll: "¡Todos los contactos eliminados correctamente!",
          },
          searchPlaceholder: "Buscar...",
          confirmationModal: {
          deleteTitle: "Eliminar ",
          deleteAllTitle: "Eliminar Todos",
          importTitle: "Importar contactos",
          deleteMessage: "¿Seguro que deseas eliminar este contacto? Se perderán todos los Chats relacionados.",
          deleteAllMessage: "¿Seguro que deseas eliminar todos los contactos? Se perderán todos los Chats relacionados.",
          importMessage: "¿Deseas importar todos los contactos del teléfono?",
          },
          buttons: {
          import: "Importar Contactos",
          add: "Agregar Contacto",
          export: "Exportar Contactos",
          delete: "Eliminar Todos los Contactos"
          },
          table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Correo electrónico",
          actions: "Acciones",
          },
          },
          queueIntegrationModal: {
          title: {
          add: "Agregar proyecto",
          edit: "Editar proyecto",
          },
          form: {
          id: "ID",
          type: "Tipo",
          name: "Nombre",
          projectName: "Nombre del Proyecto",
          language: "Idioma",
          jsonContent: "Contenido Json",
          urlN8N: "URL",
          typebotSlug: "Typebot - Slug",
          typebotExpires: "Tiempo en minutos para que una conversación expire",
          typebotKeywordFinish: "Palabra para finalizar el Chat",
          typebotKeywordRestart: "Palabra para reiniciar el flujo",
          typebotRestartMessage: "Mensaje al reiniciar la conversación",
          typebotUnknownMessage: "Mensaje de opción inválida",
          typebotDelayMessage: "Intervalo (ms) entre mensajes",
          },
        buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
test: "Probar Bot",
},
messages: {
testSuccess: "¡Integración probada exitosamente!",
addSuccess: "¡Integración agregada exitosamente!",
editSuccess: "¡Integración editada exitosamente!",
},
},
sideMenu: {
name: "Menú Lateral Inicial",
note: "Si está habilitado, el menú lateral comenzará cerrado",
options: {
enabled: "Abierto",
disabled: "Cerrado",
},
},
promptModal: {
form: {
name: "Nombre",
prompt: "Prompt",
voice: "Voz",
max_tokens: "Máximo de Tokens en la respuesta",
temperature: "Temperatura",
apikey: "Clave API",
max_messages: "Máximo de mensajes en el Historial",
voiceKey: "Clave API de Voz",
voiceRegion: "Región de Voz",
},
success: "¡Prompt guardado exitosamente!",
title: {
add: "Agregar Prompt",
edit: "Editar Prompt",
},
buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
},
prompts: {
title: "Prompts",
table: {
name: "Nombre",
queue: "Sector/Departamento",
max_tokens: "Máximo Tokens Respuesta",
actions: "Acciones",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "¿Estás seguro? ¡Esta acción no se puede deshacer!",
},
buttons: {
add: "Agregar Prompt",
},
},
contactModal: {
title: {
add: "Agregar contacto",
edit: "Editar contacto",
},
form: {
mainInfo: "Datos del contacto",
extraInfo: "Información adicional",
name: "Nombre",
number: "Número de Whatsapp",
email: "Correo electrónico",
extraName: "Nombre del campo",
extraValue: "Valor",
whatsapp: "Conexión Origen: "
},
buttons: {
addExtraInfo: "Agregar información adicional",
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
success: "¡Contacto guardado exitosamente!",
},
queueModal: {
title: {
add: "Agregar Departamento",
edit: "Editar Departamento",
},
        form: {
name: "Nombre",
color: "Color",
greetingMessage: "Mensaje de saludo",
complationMessage: "Mensaje de conclusión",
outOfHoursMessage: "Mensaje fuera del horario de atención",
ratingMessage: "Mensaje de evaluación",
token: "Token",
orderQueue: "Orden de la Departamento (Bot)",
integrationId: "Integración",
},
buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
},
userModal: {
title: {
add: "Agregar usuario",
edit: "Editar usuario",
},
form: {
name: "Nombre",
email: "Correo electrónico",
password: "Contraseña",
profile: "Perfil",
whatsapp: "Conexión Predeterminada",
allTicket: "Chat Sin departamento [Invisible]",
allTicketEnabled: "Habilitado",
allTicketDesabled: "Deshabilitado",
},
buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
success: "Usuario guardado exitosamente.",
},
scheduleModal: {
title: {
add: "Nuevo Agendamiento",
edit: "Editar Agendamiento",
},
form: {
body: "Mensaje",
contact: "Contacto",
sendAt: "Fecha de Agendamiento",
sentAt: "Fecha de Envío",
},
buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
success: "Agendamiento guardado exitosamente.",
},
tagModal: {
title: {
add: "Nueva Etiqueta",
edit: "Editar Etiqueta",
},
form: {
name: "Nombre",
color: "Color",
},
buttons: {
okAdd: "Agregar",
okEdit: "Guardar",
cancel: "Cancelar",
},
success: "Etiqueta guardada exitosamente.",
},
chat: {
noTicketMessage: "Seleccione un Chat para comenzar a conversar.",
},
uploads: {
titles: {
titleUploadMsgDragDrop: "ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO ABAJO",
titleFileList: "Lista de archivo(s)"
},
},
ticketsManager: {
buttons: {
newTicket: "Nuevo",
},
},
ticketsQueueSelect: {
placeholder: "Departamentos",
},
tickets: {
toasts: {
deleted: "El Chat en el que estaba ha sido eliminado.",
},
notification: {
message: "Mensaje de",
},
tabs: {
open: { title: "Abiertos" },
closed: { title: "Resueltos" },
search: { title: "Búsqueda" },
},
search: {
placeholder: "Buscar atención y mensajes",
},
buttons: {
showAll: "Todos",
},
},
      transferTicketModal: {
title: "Transferir Chat",
fieldLabel: "Ingrese para buscar usuarios",
fieldQueueLabel: "Transferir a departamento",
fieldQueuePlaceholder: "Seleccione un departamento",
noOptions: "Ningún usuario encontrado con ese nombre",
buttons: {
ok: "Transferir",
cancel: "Cancelar",
},
},
ticketsList: {
pendingHeader: "Pendientes",
assignedHeader: "En atención",
noTicketsTitle: "¡Nada aquí!",
noTicketsMessage:
"Ningún Chat encontrado con este estado o término de búsqueda",
buttons: {
accept: "Aceptar",
closed: "Cerrar",
reopen: "Reabrir"
},
},
newTicketModal: {
title: "Crear Chat",
fieldLabel: "Ingrese para buscar el contacto",
add: "Agregar",
buttons: {
ok: "Guardar",
cancel: "Cancelar",
},
},
mainDrawer: {
listItems: {
dashboard: "Tablero",
connections: "Conexiones",
tickets: "Chats",
quickMessages: "Respuestas Rápidas",
contacts: "Contactos",
queues: "Departamento y Bot",
tags: "Etiquetas",
administration: "Administración",
users: "Usuarios",
settings: "Ajustes",
helps: "Video Tutorial",
messagesAPI: "API de Mensajes",
schedules: "Agendamientos",
campaigns: "Campañas",
annoucements: "Anuncios",
chats: "Chat Interno",
financeiro: "Facturacion",
files: "Lista de Archivos",
prompts: "Open.Ai",
queueIntegration: "Integraciones de Departamento",
},
appBar: {
notRegister:"Sin notificaciones",
user: {
profile: "Perfil",
logout: "Cerrar sesión",
},
},
},
queueIntegration: {
title: "Integraciones",
table: {
id: "ID",
type: "Tipo",
name: "Nombre",
projectName: "Nombre del Proyecto",
language: "Idioma",
lastUpdate: "Última actualización",
actions: "Acciones",
},
buttons: {
add: "Agregar Proyecto",
},
searchPlaceholder: "Buscar...",
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
"¿Estás seguro? ¡Esta acción no se puede deshacer! y será eliminada de las departamentos y conexiones vinculadas",
},
},
files: {
title: "Lista de Archivos",
table: {
name: "Nombre",
contacts: "Contactos",
actions: "Acción",
},
toasts: {
deleted: "Lista eliminada exitosamente!",
deletedAll: "Todas las listas fueron eliminadas exitosamente!",
},
buttons: {
add: "Agregar",
deleteAll: "Eliminar Todas",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteAllTitle: "Eliminar Todas",
deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
},
},
      messagesAPI: {
title: "API",
textMessage: {
number: "Número",
body: "Mensaje",
token: "Token registrado",
},
mediaMessage: {
number: "Número",
body: "Nombre del archivo",
media: "Archivo",
token: "Token registrado",
},
},
notifications: {
noTickets: "Ninguna notificación.",
},
quickMessages: {
title: "Respuestas Rápidas",
searchPlaceholder: "Buscar...",
noAttachment: "Sin adjunto",
confirmationModal: {
deleteTitle: "Eliminación",
deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
},
buttons: {
add: "Agregar",
attach: "Adjuntar Archivo",
cancel: "Cancelar",
edit: "Editar",
},
toasts: {
success: "Atajo agregado exitosamente.",
deleted: "Atajo eliminado exitosamente.",
},
dialog: {
title: "Mensaje Rápido",
shortcode: "Atajo",
message: "Respuesta",
save: "Guardar",
cancel: "Cancelar",
geral: "Permitir editar",
add: "Agregar",
edit: "Editar",
visao: "Permitir vista",
},
table: {
shortcode: "Atajo",
message: "Mensaje",
actions: "Acciones",
mediaName: "Nombre del Archivo",
status: "Estado",
},
},
messageVariablesPicker: {
label: "Variables Disponibles",
vars: {
contactFirstName: "Primer Nombre",
contactName: "Nombre",
greeting: "Saludo",
protocolNumber: "Protocolo",
date: "Fecha",
hour: "Hora",
},
},
contactLists: {
title: "Listas de Contactos",
table: {
name: "Nombre",
contacts: "Contactos",
actions: "Acciones",
},
buttons: {
add: "Nueva Lista",
},
dialog: {
name: "Nombre",
company: "Empresa",
okEdit: "Editar",
okAdd: "Agregar",
add: "Agregar",
edit: "Editar",
cancel: "Cancelar",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
},
toasts: {
deleted: "Registro eliminado",
},
},
      contactListItems: {
title: "Contactos",
searchPlaceholder: "Buscar",
buttons: {
add: "Nuevo",
lists: "Listas",
import: "Importar",
},
dialog: {
name: "Nombre",
number: "Número",
whatsapp: "Whatsapp",
email: "Correo Electrónico",
okEdit: "Editar",
okAdd: "Agregar",
add: "Agregar",
edit: "Editar",
cancel: "Cancelar",
},
table: {
name: "Nombre",
number: "Número",
whatsapp: "Whatsapp",
email: "Correo Electrónico",
actions: "Acciones",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
importMessage: "¿Desea importar los contactos de esta hoja de cálculo?",
importTitlte: "Importar",
},
toasts: {
deleted: "Registro eliminado",
},
},
campaigns: {
title: "Campañas",
searchPlaceholder: "Buscar",
buttons: {
add: "Nueva Campaña",
contactLists: "Listas de Contactos",
},
table: {
name: "Nombre",
whatsapp: "Conexión",
contactList: "Lista de Contactos",
status: "Estado",
scheduledAt: "Programado Para",
completedAt: "Completada",
confirmation: "Confirmación",
actions: "Acciones",
},
dialog: {
new: "Nueva Campaña",
update: "Editar Campaña",
readonly: "Solo Lectura",
form: {
name: "Nombre",
message1: "Mensaje 1",
message2: "Mensaje 2",
message3: "Mensaje 3",
message4: "Mensaje 4",
message5: "Mensaje 5",
confirmationMessage1: "Mensaje de Confirmación 1",
confirmationMessage2: "Mensaje de Confirmación 2",
confirmationMessage3: "Mensaje de Confirmación 3",
confirmationMessage4: "Mensaje de Confirmación 4",
confirmationMessage5: "Mensaje de Confirmación 5",
messagePlaceholder: "Contenido del mensaje",
whatsapp: "Conexión",
status: "Estado",
scheduledAt: "Programado Para",
confirmation: "Confirmación",
contactList: "Lista de Contactos",
tagList: "Lista de Etiquetas",
fileList: "Lista de Archivos"
},
buttons: {
add: "Agregar",
edit: "Actualizar",
okadd: "Ok",
cancel: "Cancelar Disparos",
restart: "Reiniciar Disparos",
close: "Cerrar",
attach: "Adjuntar Archivo",
},
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
},
toasts: {
success: "Operación completada exitosamente",
cancel: "Campaña cancelada",
restart: "Campaña reiniciada",
deleted: "Registro eliminado",
},
},
      announcements: {
active: 'Ativo',
inactive: 'Inativo',
title: "Avisos",
searchPlaceholder: "Buscar",
buttons: {
add: "Nuevo Aviso",
contactLists: "Listas de Avisos",
},
table: {
priority: "Prioridad",
title: "Título",
text: "Texto",
mediaName: "Archivo",
status: "Estado",
actions: "Acciones",
},
dialog: {
edit: "Editar Aviso",
add: "Nuevo Aviso",
update: "Actualizar Aviso",
readonly: "Solo Lectura",
form: {
priority: "Prioridad",
title: "Título",
text: "Texto",
mediaPath: "Archivo",
status: "Estado",
},
buttons: {
add: "Agregar",
edit: "Actualizar",
okadd: "Ok",
cancel: "Cancelar",
close: "Cerrar",
attach: "Adjuntar Archivo",
},
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage: "Esta acción no se puede deshacer.",
},
toasts: {
success: "Operación completada exitosamente",
deleted: "Registro eliminado",
},
},
campaignsConfig: {
title: "Configuraciones de Campañas",
},
queues: {
title: "Departamentoss y Bot",
table: {
id:"ID",
name: "Nombre",
color: "Color",
greeting: "Mensaje de Bienvenida",
actions: "Acciones",
orderQueue: "Orden de departamento (bot)",
},
buttons: {
add: "Añadir departamento",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
"¿Está seguro? Esta acción no se puede deshacer. Los Chats de esta departamento seguirán existiendo, pero ya no tendrán ninguna Departamento asignada.",
},
},
queueSelect: {
inputLabel: "Departamento",
},
users: {
title: "Usuarios",
table: {
id: "ID",
name: "Nombre",
email: "Correo Electrónico",
profile: "Perfil",
actions: "Acciones",
},
buttons: {
add: "Agregar Usuario",
},
toasts: {
deleted: "Usuario eliminado exitosamente.",
},
confirmationModal: {
deleteTitle: "Eliminar",
deleteMessage:
"Todos los datos del usuario se perderán. Los Chats abiertos de este usuario se moverán a la departamento.",
},
},
      helps: {
        title: "Centro de Video Tutoriales",
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar este Agendamiento?",
          deleteMessage: "Esta acción no se puede deshacer.",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envío",
          status: "Estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Agendamiento eliminado exitosamente.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Estás seguro de que deseas eliminar esta Etiqueta?",
          deleteMessage: "Esta acción no se puede deshacer.",
      deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las Etiquetas?",
      deleteAllTitle: "Eliminar Todas",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros Etiquetados",
          actions: "Acciones",
        },
        buttons: {
          add: "Nueva Etiqueta",
      deleteAll: "Eliminar Todas",
        },
        toasts: {
      deletedAll: "Todas las Etiquetas eliminadas exitosamente.",
          deleted: "Etiqueta eliminada exitosamente.",
        },
      },
      settings: {
        success: "Configuraciones guardadas exitosamente.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Creación de usuario",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Volver",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje",
        placeholderClosed:
          "Reabra o acepte este Chat para enviar un mensaje.",
        signMessage: "Firmar",
      },
      contactDrawer: {
        header: "Datos del contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otra información",
      },
      fileModal: {
        title: {
          add: "Agregar lista de archivos",
          edit: "Editar lista de archivos",
        },
        buttons: {
          okAdd: "Guardar",
          okEdit: "Editar",
          cancel: "Cancelar",
          fileOptions: "Agregar archivo",
        },
        form: {
          name: "Nombre de la lista de archivos",
          message: "Detalles de la lista",
          fileOptions: "Lista de archivos",
          extraName: "Mensaje para enviar con el archivo",
          extraValue: "Valor de la opción",
        },
        success: "Lista de archivos guardada exitosamente.",
      },
      ticketOptionsMenu: {
        schedule: "Agendamiento",
        delete: "Eliminar",
        transfer: "Transferir",
        registerAppointment: "Observaciones del Contacto",
        appointmentsModal: {
          title: "Observaciones del Contacto",
          textarea: "Observación",
          placeholder: "Inserta aquí la información que deseas registrar",
        },
        confirmationModal: {
          title: "Eliminar el Chat",
      titleFrom: "del contacto ",
          message:
            "¡Atención! Todas las mensajes relacionadas con el Chat se perderán.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Aceptar",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        reply: "Responder",
        edit: 'Editar Mensaje',
        confirmationModal: {
          title: "¿Eliminar mensaje?",
          message: "Esta acción no se puede deshacer.",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró ningún WhatsApp predeterminado. Verifique la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pudo descargar el archivo multimedia de WhatsApp. Verifique la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Por favor, inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya existe un Chat abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión caducada. Por favor, inicie sesión nuevamente.",
        ERR_USER_CREATION_DISABLED:
          "La creación de usuario ha sido deshabilitada por el administrador.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontró ningún Chat con este ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear el Chat en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al recuperar el mensaje de WhatsApp, puede que sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una departamento.",
      },
    },
  },
};

export { messages };
 