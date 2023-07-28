import { useState } from "react"


const TagsInput = (props) => {
    const [Tags, setTags] = useState("")

    const { name, value, changeHandler } = props;

    const tagsHandlerFn = (e, action = "ADD") => {
        const regexPattern = /,|\s/g;

        let tags = value[name];
        
        
        if (action == "REMOVE") {
            tags = tags.filter((tag) => tag !== e)

            changeHandler({
                target:
                {
                    name: name,
                    value: tags
                }
            })

        } else if (action == "ADD") {

            let newTag = e.target.value
            if (newTag.match(regexPattern)) {
                // it's mean user enter comma or space
                tags.push(Tags)

                changeHandler({
                    target:
                    {
                        name: name,
                        value: tags
                    }
                })

                setTags("")
            } else {
                setTags(newTag)
            }


        }


    }

    return (
        <>
            <input 
                type="text" 
                name={name} 
                value={Tags}
                onChange={(e) => tagsHandlerFn(e)} 
                className="tags-input"
            />
            <p className="help-text">
                Increase your ad exposure. Enter up to 5 keywords someone could
                search to find your ad.
            </p>
            {value?.[name]?.[0] && (
                <div className="tags-container">
                    {value[name].map((tag, idx) => <p key={tag + "__tags__" + idx} onClick={() => tagsHandlerFn(tag, "REMOVE")}>#{tag}</p>)}
                </div>
            )}
        </>
    )
}

export default TagsInput