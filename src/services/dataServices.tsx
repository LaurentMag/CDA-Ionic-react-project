import {CompetenceType} from "../type/CompetenceType";

class DataServices {
  fetchData = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  fetchDataById = (url: string, id: string) => {
    return fetch(`${url}/${id}`).then((res) => res.json());
  };

  postData = (url: string, data: CompetenceType) => {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  putData = (url: string, id: string, data: any) => {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application-json",
      },
    }).then((res) => res.json());
  };

  patchData = (url: string, id: string, data: any) => {
    return fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  deleteData = (url: string, id: string) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
}

export const dataServices = Object.freeze(new DataServices());
