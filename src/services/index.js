export const baseURL = `https://api.airtable.com/v0/appyuNKliz2BrJEa6/notes`



export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}