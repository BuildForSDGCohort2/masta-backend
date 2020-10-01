def build_model(input_shape=(160,20,1)):
    """Generates CNN model
    :param input_shape (tuple): Shape of input set
    :return model: CNN model
    """
    import keras
    from keras import regularizers
    import tensorflow
    L2NormConst = 0.001
    # build network topology
    model = keras.Sequential()

    # 1st conv layer
    model.add(keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape,kernel_regularizer=regularizers.l1_l2(l1=1e-5, l2=1e-4)))
    model.add(keras.layers.MaxPooling2D((3, 3), strides=(2, 2), padding='same'))
    model.add(keras.layers.BatchNormalization())

    # 2nd conv layer
    model.add(keras.layers.Conv2D(32, (3, 3), activation='relu',kernel_regularizer=keras.regularizers.l2(0.01)))
    model.add(keras.layers.MaxPooling2D((3, 3), strides=(2, 2), padding='same'))
    model.add(keras.layers.BatchNormalization())

    # 3rd conv layer
    model.add(keras.layers.Conv2D(32, (2, 2), activation='relu',kernel_regularizer=keras.regularizers.l2(0.01)))
    model.add(keras.layers.MaxPooling2D((2, 2), strides=(2, 2), padding='same'))
    model.add(keras.layers.BatchNormalization())
    model.add(keras.layers.Dropout(0.3))
    
    # flatten output and feed it into dense layer
    model.add(keras.layers.Flatten())
    model.add(keras.layers.Dense(64, activation='relu',kernel_regularizer=keras.regularizers.l2(0.01)))
    model.add(keras.layers.Dropout(0.3))
    model.add(keras.layers.Dense(32,activation='relu',kernel_regularizer=keras.regularizers.l2(0.01)))

    # output layer
    model.add(keras.layers.Dense(8, activation='softmax'))

    return model

def extract_feature(signal):
    print("enter into extract feature")
#     signal,sr=librosa.load(audio_file)
    import numpy as np
    import librosa 
    signal=np.resize(signal,(72838,))
    abs=np.abs(signal)

  #stft
    hop_length=512
    n_fft=2048
    stft=librosa.core.stft(signal,hop_length=hop_length,n_fft=n_fft)
    stft=np.abs(stft)

      # mfcc
    mfcc=librosa.feature.mfcc(signal,sr=22050,hop_length=hop_length)
    mfcc=mfcc.T
    result=np.array(mfcc)
    result=np.resize(result,(160,20,1))
    print("exit from extract feature")
    return result

# predict value for one recorded audio
def predict(model, X_test):
    import numpy as np
    """Predict a single sample using the trained model
    :param model: Trained classifier
    :param X: Input data
    :param y (int): Target
    """
    print("enter into predict")
    ans=[]
    
    # add a dimension to input data for sample - model.predict() expects a 4d array in this case
    a=X_test
    a = a[np.newaxis, ...] # array shape (1, 130, 13, 1)

    # perform prediction
    prediction = model.predict(a)

    # get index with max value
    predicted_index = np.argmax(prediction, axis=1)
    ans.append(predicted_index)
    print("exit from predict and ans is",ans)
    return ans

def record_audio_and_predict_emotion(model):
    # !pip install sounddevice
    import sounddevice
    import numpy as np
    fs=44100
    second=3
    print("... recording....................")
    record_voice=sounddevice.rec(int(fs*second),samplerate=fs,channels=1)
    sounddevice.wait()
#     record_voice=record_voice.
    result=extract_feature(record_voice)
    result=np.array(result)
    ans=predict(model,result)
    print("output final emotion value",ans)
    return ans[0]

def run():
    import tensorflow
    import keras
    from keras import regularizers
#     build model
    input_shape=(160,20,1)
    model = build_model(input_shape)

    # compile model
    optimiser = keras.optimizers.Adam(learning_rate=0.0001)
    model.compile(optimizer=optimiser,
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    model.summary()
    
#     load weights of model
    model.load_weights('./speech_final_thassda_weight.h5')
    
    
#     start recording audio and predict its emotion for 3 second
    ans=record_audio_and_predict_emotion(model)
    return ans
    
    
ans=t=run()
print(ans)
    
