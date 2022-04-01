const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../nft")
const dirPathCollections = path.join(__dirname, "../collection")
const dirPathPages = path.join(__dirname, "../src/pages/content")
let postlist = []
let collectionlist = []
let pagelist = []

const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const formatDate = (date) => {
    const datetimeArray = date.split("T")
    const dateArray = datetimeArray[0].split("-")
    const timeArray = datetimeArray[1].split(":")
    const month = dateArray[1]
    const monthName = months[dateArray[1]]
    const day = dateArray[2]
    const year = dateArray[0]
    const time = `${timeArray[0]}:${timeArray[1]}`

    return {"month": month, "monthName": monthName, "day": day, "year": year, "time": time}
}

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist = []
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const parsedDate = metadata.date ? formatDate(metadata.date) : new Date()
                const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`
                const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`
                const date = new Date(datestring)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    date: publishedDate ? publishedDate : "No date given",
                    time: parsedDate["time"],
                    thumbnail: metadata.thumbnail,
                    content: content ? content : "No content given",
                    price: metadata.price ? metadata.price : "No price given",
                    collection: metadata.collection ? metadata.collection : "No collection given",
                }
                postlist.push(post)
                ilist.push(i)
                if (ilist.length === files.length) {
                    const sortedList = collection.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return 
}

const getCollections = () => {
    fs.readdir(dirPathCollections, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        let ilist2 = []
        files.forEach((file, i) => {
            let obj2 = {}
            let post2
            fs.readFile(`${dirPathCollections}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices2 = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata2 = ({lines2, metadataIndices2}) => {
                    if (metadataIndices2.length > 0) {
                        let metadata2 = lines2.slice(metadataIndices2[0] + 1, metadataIndices2[1])
                        metadata2.forEach(line => {
                            obj2[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj2
                    }
                }
                const parseContent2 = ({lines2, metadataIndices2}) => {
                    if (metadataIndices2.length > 0) {
                        lines2 = lines2.slice(metadataIndices2[1] + 1, lines2.length)
                    }
                    return lines2.join("\n")
                }
                const lines2 = contents.split("\n")
                const metadataIndices2 = lines2.reduce(getMetadataIndices2, [])
                const metadata2 = parseMetadata2({lines2, metadataIndices2})
                const content2 = parseContent2({lines2, metadataIndices2})
                const parsedDate2 = metadata2.date ? formatDate(metadata2.date) : new Date()
                const publishedDate2 = `${parsedDate2["monthName"]} ${parsedDate2["day"]}, ${parsedDate2["year"]}`
                const datestring2 = `${parsedDate2["year"]}-${parsedDate2["month"]}-${parsedDate2["day"]}T${parsedDate2["time"]}:00`
                const date2 = new Date(datestring2)
                const timestamp2 = date2.getTime() / 1000
                post2 = {
                    id: timestamp2,
                    title: metadata2.title ? metadata2.title : "No title given",
                    date: publishedDate2 ? publishedDate2 : "No date given",
                    time: parsedDate2["time"],
                    thumbnail: metadata2.thumbnail,
                    content: content2 ? content2 : "No content given",
                    price: metadata2.price ? metadata2.price : "No price given",
                    hot: metadata2.hot ? metadata2.hot : ""
                }
                collectionlist.push(post2)
                ilist2.push(i)
                if (ilist2.length === files.length) {
                    const sortedList2 = collection.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data2 = JSON.stringify(sortedList2)
                    fs.writeFileSync("src/collections.json", data2)
                }
            })
        })
    })
    return 
}

const getPages = () => {
    fs.readdir(dirPathPages, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let page
            fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => { 
                page = {
                    content: contents
                }
                pagelist.push(page)
                let data = JSON.stringify(pagelist)
                fs.writeFileSync("src/pages.json", data)
            })
        })
    })
    return 
}

getPosts()
getCollections()
getPages()