import * as types  from './../../conStants/slides';
var initialState={
    deleteSlidesRequest:false,
    deleteSlidesSuccess:false,
    deleteSlidesError:false,
    updateStatusSlidesRequest:false,
    updateStatusSlidesSuccess:false,
    updateStatusSlidesError:false,
    addSlidesRequest:false,
    addSlidesSuccess:false,
    addSlidesError:false
};
var myReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case types.ADD_SLIDES_REQUEST:
            state={
                deleteSlidesRequest:false,
                deleteSlidesSuccess:false,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:false,
                updateStatusSlidesError:false,
                addSlidesRequest:true,
                addSlidesSuccess:false,
                addSlidesError:false
            }
        return state;
        case types.ADD_SLIDES_SUCCESS:
            state={
                deleteSlidesRequest:false,
                deleteSlidesSuccess:false,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:false,
                updateStatusSlidesError:false,
                addSlidesRequest:false,
                addSlidesSuccess:true,
                addSlidesError:false
            }
        return state;
        case types.RESET_SLIDES:
            state={
                deleteSlidesRequest:false,
                deleteSlidesSuccess:false,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:false,
                updateStatusSlidesError:false,
                addSlidesRequest:false,
                addSlidesSuccess:false,
                addSlidesError:false
            }
        return state;
        case types.DELETE_SLIDES_SUCCESS:
            state={
                deleteSlidesRequest:false,
                deleteSlidesSuccess:true,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:false,
                updateStatusSlidesError:false,
                addSlidesRequest:false,
                addSlidesSuccess:false,
                addSlidesError:false
            }
        return state;
        case types.DELETE_SLIDES_REQUEST:
            state={
                deleteSlidesRequest:true,
                deleteSlidesSuccess:false,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:false,
                updateStatusSlidesError:false,
                addSlidesRequest:false,
                addSlidesSuccess:false,
                addSlidesError:false
            }
        return state;
        case types.UPDATE_STATUS_SLIDES_SUCCESS:
            state={
                deleteSlidesRequest:false,
                deleteSlidesSuccess:false,
                deleteSlidesError:false,
                updateStatusSlidesRequest:false,
                updateStatusSlidesSuccess:true,
                updateStatusSlidesError:false,
                addSlidesRequest:false,
                addSlidesSuccess:false,
                addSlidesError:false
            }
        return state;
        default :return state;
    }

}
export default myReducer;