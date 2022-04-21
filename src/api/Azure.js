import { BlobServiceClient} from '@azure/storage-blob';

const sasToken = 'sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2023-04-21T20:22:32Z&st=2022-04-21T12:22:32Z&spr=https,http&sig=9z1prfYmKWjpy6TWbShoa%2BIgKCLTBV3yENJ8i7KWsyw%3D'
const containerName = `images`;
const storageAccountName = `rgreactarticleimages`; 



class AzureBlobApi {
 

    uploadFileToBlob = async (file) => {

        if (!file) return [];
   
        // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
        const blobService = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`);
        // get Container - full public read access
        const containerClient = blobService.getContainerClient(containerName);

        // create blobClient for container
        const blobClient = containerClient.getBlockBlobClient(file.name);
                
        // set mimetype as determined from browser with file upload control
        const options = { blobHTTPHeaders: { blobContentType: file.type } };

        // upload file   
        blobClient.uploadData(file, options).then((res) => {return res});
      
    };
}

export default AzureBlobApi

