interface IResearch {
  _id: number;
  paper_header?: string;
  paper_title: string;
  paper_link: string;
  paper_contributors: string;
  publication_site?: string;
  paper_abstract?: string;
}

export const publications: IResearch[] = [
  {
    _id: 1,
    paper_title:
      "Global Advancements and Current Challenges of Electric Vehicle Batteries and Their Prospects: A Comprehensive Review",
    paper_contributors:
      "Hridoy Roy, Bimol Nath Roy, Md. Hasanuzzaman, Md. Shahinoor Islam, Ayman S. Abdel-Khalik, Mostaf S. Hamad, Shehab Ahmed",
    paper_link: "https://www.mdpi.com/2071-1050/14/24/16684",
    publication_site:
      "In 1st International Conference on Bangla Speech and Language Processing (ICBSLP), pp. 1-6, 2018",
    paper_abstract:
      "Despite being one of the most extensively spoken languages in the world, the Bengali language has inadequate resources. Due to the lack of adequate and suitable public datasets in Bengali, it is difficult to work with the Bengali Language. In this study, Bengali short speech commands data set has been reported that consists of 10 frequently used short speechcommands, each with approximately 100 utterances. Later, threedifferent Convolutional Neural Network (CNN) architectures have been proposed to recognize those short speech commands.One of the models took raw audio as input, whereas anothermodel took Mel-Frequency Cepstral Coefficients (MFCC) of theaudio signals as inputs, and the third model leveragedtransfer learning by pre-training the model with English shortspeech commands. Experimental results reveal that the MFCCmodel shows better accuracy in recognizing Bengali shortspeech commands where, surprisingly, the model predicting onraw audio data is very competitive. Though the models haveshown proficiency in identifying single-syllable words but encounter difficulties in recognizing multi-syllable commands.",
  },
];

export const researches: IResearch[] = [
  {
    _id: 1,
    paper_header: "Undergraduate Thesis",
    paper_title: "Dynamic Modelling of Pesticide Residues in Plants",
    paper_link: "https://www.mdpi.com/2071-1050/14/24/16684",
    paper_contributors: "Bimol Nath Roy, Md. Hasanuzzaman",
    paper_abstract:
      "This research-based thesis was conducted under the supervision of Dr. MAA Shoukat Choudhury. A first principle model was built to analyze the dynamic behavior of pesticides in different plant compartments. Simultaneous ODEs were solved in MATLAB.",
  },
  {
    _id: 2,
    paper_header: "Undergraduate Design Project",
    paper_title: "Design of a 90 MTPD Methanol Production Plant",
    paper_link: "https://www.mdpi.com/2071-1050/14/24/16684",
    paper_contributors: "Bimol Nath Roy, Md. Hasanuzzaman",
    paper_abstract:
      "This was a design project submitted for the partial fulfilment of the requirements for the degree of B.Sc. in Chemical Engineering. Design of a functioning methanol plant was developed under the supervision of Dr. Nafisa Islam and material and energy balances were performed. Basic sizing were done for major equipment and detailed design were done for four distinct equipment by four group memb ",
  },
];
