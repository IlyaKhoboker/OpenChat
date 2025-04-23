export const ENTER_CHAT = "ENTER_CHAT";
export const ENTER_CHAT_SUCCESS = "ENTER_CHAT_SUCCESS";
export const ENTER_CHAT_FAILURE = "ENTER_CHAT_FAILURE";

export const LOAD_ROOMS_DATA = "LOAD_ROOMS_DATA";
export const LOAD_MESSAGES_DATA = "LOAD_MESSAGES_DATA";

export const CREATE_ROOM = "CREATE_ROOM";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_FAILURE = "CREATE_ROOM_FAILURE";

export const DELETE_ROOM = "DELETE_ROOM";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";

export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const RESET_MESSAGES = "RESET_MESSAGES";

export const enterChatRoomAction = (payload) => ({ type: ENTER_CHAT, payload });

export const loadRoomsDataAction = (payload) => ({ type: LOAD_ROOMS_DATA, payload });
export const loadMessagesDataAction = (payload) => ({ type: LOAD_MESSAGES_DATA, payload });

export const createRoomAction = (payload) => ({ type: CREATE_ROOM, payload });

export const deleteRoomAction = (payload) => ({ type: DELETE_ROOM, payload });

export const sendMessageAction = (payload) => ({ type: SEND_MESSAGE, payload });

export const deleteMessageAction = (payload) => ({ type: DELETE_MESSAGE, payload });

export const resetMessageAction = (payload) => ({ type: RESET_MESSAGES, payload });
