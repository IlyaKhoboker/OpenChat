import {
    ENTER_CHAT,
    ENTER_CHAT_SUCCESS,
    ENTER_CHAT_FAILURE,
    LOAD_ROOMS_DATA,
    CREATE_ROOM,
    CREATE_ROOM_SUCCESS,
    CREATE_ROOM_FAILURE,
    DELETE_ROOM,
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    DELETE_MESSAGE,
    LOAD_MESSAGES_DATA,
    RESET_MESSAGES
} from "../actions/chatActions";
import {
    SIGN_OUT
} from "../actions/authActions";

const initialState = {
    error_message: null,
    rooms: null,
    currentChatRoomName: null,
    currentChatRoomKey: null,
    currentMessages: null
};

export default function chatReducer(state = initialState, action) {
    switch (action.type) {

        case LOAD_ROOMS_DATA: {
            if (action.payload === null) {
                return {
                    ...state,
                    rooms: action.payload,
                    currentChatRoomName: null,
                    currentChatRoomKey: null
                }
            } else
                return {
                    ...state,
                    rooms: action.payload
                };
        }

        case LOAD_MESSAGES_DATA: {
            return {
                ...state,
                currentMessages: action.payload
            };
        }

        case ENTER_CHAT: {
            return {
                ...state
            }
        }

        case ENTER_CHAT_SUCCESS: {
            return {
                ...state,
                error_message: null,
                currentChatRoomKey: action.chatRoomKey,
                currentChatRoomName: action.chatRoomName
            }
        }

        case ENTER_CHAT_FAILURE: {
            return {
                ...state,
                error_message: action.error_message
            }
        }

        case CREATE_ROOM: {
            return {
                ...state,
            };
        }
        case DELETE_ROOM: {
            if (action.payload === state.currentChatRoomKey) {
                return {
                    ...state,
                    currentChatRoomName: null,
                    currentChatRoomKey: null
                };
            } else {
                return {
                    ...state
                };
            }
        }

        case CREATE_ROOM_SUCCESS: {
            return {
                ...state,
            };
        }

        case CREATE_ROOM_FAILURE: {
            return {
                ...state,
            };
        }


        case SIGN_OUT: {
            return {
                ...state,
                error_message: null,
                rooms: null,
                currentChatRoom: null,
                currentMessages: null
            }
        }

        case SEND_MESSAGE: {
            return {
                ...state
            }
        }

        case SEND_MESSAGE_SUCCESS: {
            return {
                ...state,
            }
        }

        case SEND_MESSAGE_FAILURE: {
            return {
                ...state
            }
        }

        case RESET_MESSAGES: {
            return {
                ...state,
                currentMessages: null
            }
        }

        case DELETE_MESSAGE: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
}