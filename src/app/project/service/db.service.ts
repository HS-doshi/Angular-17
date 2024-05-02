import { Injectable } from '@angular/core';
import { doc, getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc,getDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { title } from 'process';
import { Snippet } from '../models/snippet';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db: any;

  constructor(private authService: AuthService,private router:Router) {
    this.db = getFirestore();
  }
  async createSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);

    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error while creating!');
    }
  }
  async getAllSnippets() {
    let result :{id:string}[]=[];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id, ...doc.data(),
      })
    });
    return result;
  }
  async getSnippetById(docId:string){

  const docRef = doc(this.db, "snippets",docId);
  const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      this.router.navigate(['home']);
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return {
        id:'1',
        title:'Not Found!',
        code:'not found!'
      }
    }
  }
}
