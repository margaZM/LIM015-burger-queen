import { ref} from 'firebase/storage';

export const saveRef = (file, storage) => ref(storage, `documentos/${file.name}`);
