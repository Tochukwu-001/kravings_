"use client"
import { Field, Form, Formik } from 'formik';


export default function RecipeClient (){
    return (
        <main className="min-h-dvh">
            <Formik>
                <Form>
                    <div>
                        <label htmlFor="">Recipe Name</label>
                        <Field type="text" name="title" placeholder="e.g Fisherman Soup"/>
                    </div>
                    <div>
                        <label htmlFor="">Ingredients</label>
                        <Field type="text" name="ingredients" placeholder="separate with commas"/>
                    </div>
                    <div>
                        <label htmlFor="">Method</label>
                        <Field type="text" name="method" placeholder="e.g Boiling"/>
                    </div>
                    <div>
                        <label htmlFor="">Duration</label>
                        <Field type="number" name="duration" placeholder="In minuites"/>
                    </div>
                    <div>
                        <label htmlFor="">Instrcutions</label>
                        <Field type="text" name="instructions" placeholder="separate with commas"/>
                    </div>

                    <button type='submit'>Submit Recipe</button>
                </Form>           
            </Formik>
        </main>
    )
}

