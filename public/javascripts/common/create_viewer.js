import { startViewer } from "../conversionService.js";

const createViewer = (modelName, containerId) => {
    return new Promise(async function (resolve, reject) {
        // if (!STREAM_CACHE_API || !HWP_VERSION) {
        //     console.log('Ensure values for HWP_VERSION and STREAM_CACHE_API are set.');
        // }

        // getContainerEndpoint({HWP_VERSION: hwp_version}).then((data) => {
        //     if (data === 'error: 429 - Too many requests') {
        //         window.location.replace("/error/too-many-requests");
        //     }
        var viewer = await startViewer(modelName, containerId)
         
            resolve(viewer);
            // if (data.collection_id) window.onbeforeunload = () => { $.get('/api/delete_collection?collection=' + [data.collection_id]); };
        // });
    })
}

export default createViewer;
