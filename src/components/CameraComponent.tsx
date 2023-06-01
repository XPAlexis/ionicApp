import React, { useState } from "react";
import { IonContent, IonButton, IonImg } from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const CameraComponent: React.FC = () => {
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    setPhoto(image.base64String);
  };

  return (
    <IonContent>
      <IonButton onClick={takePhoto}>Tomar foto</IonButton>
      {photo && <IonImg src={`data:image/jpeg;base64,${photo}`} />}
    </IonContent>
  );
};

export default CameraComponent;
