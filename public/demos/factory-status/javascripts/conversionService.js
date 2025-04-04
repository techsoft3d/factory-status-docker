var factory_uids = [
        "478f45db-a31c-4ced-88a8-0fa57febdcf2", //factory
        "eced11eb-15e2-4942-b59f-9a423e2a8f10",//cmm assembly
        "8235ee04-2b49-4288-ab1d-4483647b19de", //nsrobot5
        "22cb3635-120d-49a7-a0d7-2ff0edcbb5fd",//pickuprobot1
        "abd650c0-e04c-4c25-9d3b-f90c7f497de0",//weldrobot1
]



export async function startViewer(model, container) {
        var server = new ServerConnection("https://factory-status-docker.techsoft3d.com"); //change to IP of host server
        await server.connect();
        var viewer;   

        viewer = new Communicator.WebViewer({
                containerId: container,
                endpointUri: server._endpointuri,
                model: model,
                boundingPreviewMode: "none",
                enginePath: '/hoops',
                rendererType: 0
        });

        // viewer.start();

        return viewer;

}

